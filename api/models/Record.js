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
      collection: 'website',
      via: 'records'
    }
  },
  getByWebsiteEntity:function(websiteId, entityId, cb) {

    var entityIds = [entityId];

    Attribute.getAllSorted(function(errAttr, attrs)
    {
      Record.find({
        entity: entityIds
        //active:true
      })
        .sort('id DESC')
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

