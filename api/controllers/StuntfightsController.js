module.exports =
{
  index: function (req, res) {

    //  TODO: get website id from url instead of hard code 5, maybe pass in from policy
    OutputService.getWebsiteRecords(5, function (err, records) {

      if (err)
        return res.serverError(err);


      console.log("records for output\n%s", JSON.stringify(records, null, " "));

      res.view("homepage", {
        records: records,
        layout: 'layouts/stuntfights'
      });
    });
  }
};
