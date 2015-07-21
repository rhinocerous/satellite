module.exports = {
  decorateRecords:function(records, cb) {
    Attribute.getAllSorted(function(errAttr, attrs)
    {
      records.forEach(function(record){

        var x = 0;
        record.values.forEach(function(value){
          value.attribute = attrs[value.attribute];
        });
      });

      cb(null, records);
    });
  },
  attach:function(entity, attrs)
  {
    console.log("attach attrs for entity %s\n%s", entity.id, JSON.stringify(attrs, null, "  "));

    var thisEntity = entity;

    async.map(attrs, function iterator (attribute, cb){

        Attribute.findOneBySlug(attribute.slug).exec(function (err, dbAttr) {
          if (!dbAttr) {
            Attribute.create({name: attribute.name, slug: attribute.slug}).exec(function (err, newAttr) {
              thisEntity.attributes.add(newAttr.id);
              thisEntity.save(console.log);
              cb(null, {});
            });
          }
          else {
            thisEntity.attributes.add(dbAttr.id);
            thisEntity.save(console.log);
            cb(null, {});
          }
        });
      },
      function () {

        //cb();


      });

  }
};
