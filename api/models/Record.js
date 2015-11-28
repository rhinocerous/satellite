/**
* Record.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userId:{
      type:"integer",
      required:false
    },
    order:{
      type:"integer",
      required:true
    },
    entity:{
      model: 'entity'
    },
    values:{
      collection: "value", // match model name here
      via: "record", // match attribute name on other model
      dominant: true // dominant side
    },
    medias:{
      collection: "media", // match model name
      via: "record" // match attribute name
    },
    user:{
      collection: "user", // match model name
      via: "records" // match attribute name
    },
    website:{
      collection: "website", // match model name
      via: "records" // match attribute name
    }
  },
  getById:function(recordId, cb)
  {
    Attribute.getAllSorted(function(errAttr, attrs)
    {
      Record.findOne(recordId)
        .populate('values')
        .populate('entity')
        .populate('medias')
        .exec(function (errRec, record) {

          if(record && record.values)
          {
            record.values.forEach(function(value){
              value.attribute = attrs[value.attribute];
            });

            RecordService.organize([record], cb);
          }
          else
          {
            cb(null, []);
          }


        });
    });
  },
  getByWebsite:function(websiteId, cb) {

    var websiteIds = [websiteId];

    Attribute.getAllSorted(function(errAttr, attrs)
    {

    /*
    * TODO: this is going to be a major bottleneck when lots of records get in the db
    * find a better way to load records for db
    * */
      Website.findOne(websiteId)
        .populate("records")
        .exec(function(err, found){

          if(found && found.records && found.records.length)
          {
            var recordIds = [];

            found.records.forEach(function(record){
              recordIds.push(record.id);
            });

            Record.find()
              .where({id: recordIds})
              .populate('values')
              .populate('entity')
              .populate('medias')
              .exec(function (errRec, records) {

                records.forEach(function(record){
                  record.values.forEach(function(value){
                    value.attribute = attrs[value.attribute];
                  });
                });

                RecordService.organize(records, cb);
              });
          }
          else
          {
            return cb(null, []);
          }
        });
    });

  },
  getByWebsiteEntity:function(websiteId, entityId, cb) {

    var entityIds = [entityId];
    var siteIds = [websiteId];

    Attribute.getAllSorted(function(errAttr, attrs)
    {
      /*
       * TODO: this is going to be a major bottleneck when lots of records get in the db
       * find a better way to load records for db. currently I am getting the ids of ALL the records
       * in the db for this website then using those in the IN clause for the actual records with associated
       * values. this probably won't work when we get 90k records in there though.
       *
       * later on I should pass in entityId and paging params to getWebsiteRecordIds()
       * so that we can just grab subsets of ids and records instead of everything.
       * */

      RecordService.getWebsiteRecordIds(websiteId, {}, function(err, recordIds){

        Record.find()
          .where({
            id: recordIds
            ,entity: entityIds
          })
          .sort('id DESC')
          .populate('values')
          .populate('entity')
          .populate('medias')
          .exec(function (errRec, records) {

            if(records) {
              records.forEach(function (record) {
                record.values.forEach(function (value) {
                  value.attribute = attrs[value.attribute];
                });
              });

              RecordService.organize(records, cb);

            } else{
              cb(null, {});
            }

          });
      });
    });
  },
  getByEntityGroup:function(group, cb) {

    Entity.findByGroup(group).exec(function (err, entities) {

      if (err || !entities)
        return cb(null, []);


      Attribute.getAllSorted(function(errAttr, attrs)
      {
        var entityIds = [];

        entities.forEach(function (entity) {
          entityIds.push(entity.id);
        });

        Record.find({
          entity: entityIds
          //active:true
          })
          .populate('values')
          .populate('entity')
          .exec(function (errRec, records) {

            records.forEach(function(record){
              record.values.forEach(function(value){
                value.attribute = attrs[value.attribute];
              });
            });

              RecordService.organize(records, cb);

            //cb(null, records);
          });

      });
    });
  }
};

