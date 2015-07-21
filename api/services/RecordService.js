module.exports = {

  updateValues:function(record, cb)
  {

    console.log("update record \n%s", JSON.stringify(record, null, " "));




    Record.find({id:record.id})
      .populate('values')
      .exec(function findCB(err, found) {

      console.log("found values \n%s", JSON.stringify(found, null, " "));
      console.log("err values \n%s", JSON.stringify(err, null, " "));

      if(found)
      {
        //async.map(found, function iterator (value, updateCb){
        //
        //    _.each(record, function (recVal, recKey) {
        //      if(value.slug == recKey)
        //      {
        //        value.valString = recVal;
        //
        //        Value.update(value.id, value).exec(function(err, updatedVal)
        //        {
        //          updateCb()
        //        });
        //
        //        return false;
        //      }
        //    });
        //  },
        //  function () {
        //    Value.find({record:record.id}).exec(function findCB(err, found) {
        //      return cb(err, found);
        //    })
        //
        //  });
      }

    });
  },
  organize:function(records, cb)
  {
    var out = {};

    async.map(records, function iterator (record, mapRecordCb){
        var row;

        if(out[record.entity.slug])
        {
          row = out[record.entity.slug];
        }
        else
        {
          row = record.entity;
          row.values = [];
          row.headers = {};
        }

        var rec = {
          id:record.id
        };

        async.map(record.values, function iterator (value, mapValueCb){

            if (!row.headers[value.attribute.slug])
              row.headers[value.attribute.slug] = value.attribute;

            switch(value.attribute.type)
            {
              case "string":
              default:
                rec[value.attribute.slug] = decodeURIComponent(value.valString);
                break;
              case "text":
                rec[value.attribute.slug] = value.valText;
                break;
              case 'int':
                rec[value.attribute.slug] = value.valInt;
                break;
              case 'decimal':
                rec[value.attribute.slug] = value.valDecimal;
                break;
              case 'bool':
                rec[value.attribute.slug] = value.valBool;
                break;
              case 'date':
                rec[value.attribute.slug] = value.valDate;
                break;
              case 'datetime':
                rec[value.attribute.slug] = value.valDatetime;
                break;
            }

            if(row.values.indexOf(rec) == -1)
              row.values.push(rec);

          out[record.entity.slug] = row;

          mapValueCb(null, row);

        },
        function () {
          mapRecordCb(null, rec)
        });
    },
    function () {
      cb(null, out);
    });
  }
};
