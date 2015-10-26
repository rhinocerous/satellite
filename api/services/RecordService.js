module.exports = {

  updateValues:function(record, cb)
  {

    //console.log("update record \n%s", JSON.stringify(record, null, " "));

    Record.find({id:record.id})
      .populate('values')
      .exec(function findCB(err, found) {

        //console.log("found values \n%s", JSON.stringify(found, null, " "));
        //console.log("err values \n%s", JSON.stringify(err, null, " "));

        if (found && found.length > 0) {

        AttributeService.decorateRecords(found, function(err, records){

          var dbRecord = records[0];

          async.map(dbRecord.values, function iterator(value, updateCb){

              _.each(record, function (recVal, recKey) {

                //console.log("match from request ----> %s -> %s", recVal, recKey);

                if (value.attribute.slug == recKey) {


                  var req = {
                    valString:recVal
                  };

                  //console.log("update values \n%s", JSON.stringify(req, null, " "));

                  Value.update(value.id, req).exec(function (updateErr, updatedVal) {
                    console.log("value updated");
                    return updateCb()
                  });
                }
              });

            },
            function () {

              console.log("----> async callback has fired");
              Record.find({id:record.id})
                .populate('values')
                .exec(function findCB(err, foundUp) {

                  AttributeService.decorateRecords(foundUp, function(err, recordsUp
                  ){
                    //console.log("found UPDATED values \n%s", JSON.stringify(recordsUp, null, " "));
                    return cb(err, recordsUp);
                  });

                });

            });
        });
        }
        else
        {
          cb(null, {});
        }
      },
      function () {


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

    //  TODO: we could support arrays of medias here, backend does already. not enough time right now
        var rec = {
          id:record.id,
          medias: (record.medias && record.medias.length > 0) ? record.medias : null
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
