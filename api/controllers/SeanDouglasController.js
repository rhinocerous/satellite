module.exports =
{
  index: function (req, res) {

    //  TODO: get website id from url instead of hard code 1, maybe pass in from policy
    OutputService.getWebsiteRecords(1, function (err, records) {

      if (err)
        return res.serverError(err);


      console.log("records for output\n%s", JSON.stringify(records, null, " "));

      res.view("homepage", {
        records: records,
        layout: 'layouts/sean_douglas'
      });
    });
  },
  project: function (req, res) {

    Record.getById(req.params.projectId,  function(err, records){

        if (err || !records.project)
          return res.serverError(err);

        var record = records.project;

      //console.log("record\n%s", JSON.stringify(records, null, " "));

        var view = "projectPhoto";

        switch (record.values[0].group)
        {
          case 'gallery':
                view = "projectGallery";
                break;

          case 'video':
              view = "projectVideo";
                break;

        }

        res.view("seanDouglas/" + view, {
          record: record,
          layout: 'layouts/empty'
        });

      });



    ////  TODO: get website id from url instead of hard code 1, maybe pass in from policy
    //OutputService.getWebsiteRecords(1, function (err, records) {
    //
    //  if (err)
    //    return res.serverError(err);
    //
    //  res.view("homepage", {
    //    records: records,
    //    layout: 'layouts/sean_douglas'
    //  });
    //});
  }
};
