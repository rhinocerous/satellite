module.exports = {
  organize:function(records, cb)
  {
    var out = {};

    records.forEach(function (record) {

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

      var rec = {};

      record.values.forEach(function (value) {
        //console.log("organize value\n%s", JSON.stringify(value, null, " "));

        if (!row.headers[value.attribute.slug])
          row.headers[value.attribute.slug] = value.attribute;

        switch(value.attribute.type)
        {
          case "string":
          default:
            rec[value.attribute.slug] = value.valString;
                break;
          case "text":
            rec[value.attribute.slug] = value.valText;
            break;

          case 'int':
            rec[value.attribute.slug] = value.valInt
            break;

          case 'decimal':
            rec[value.attribute.slug] = value.valDecimal;
            break;
          case 'bool':
            rec[value.attribute.slug] = value.valBool;
            break;
          case 'date':
            rec[value.attribute.slug] = value.valDate
            break;
          case 'datetime':
            rec[value.attribute.slug] = value.valDatetime
            break;
        }
      });

      row.values.push(rec);

      out[record.entity.slug] = row;

    });

    cb(null, out);
  }
};
