module.exports =
{
  index: function (req, res) {

    res.view("homepage", {
      layout: 'layouts/autodealio'
    });

    //  TODO: get website id from url instead of hard code 1, maybe pass in from policy
    //OutputService.getWebsiteRecords(1, function (err, records) {
    //
    //  if (err)
    //    return res.serverError(err);
    //
    //
    //  console.log("records for output\n%s", JSON.stringify(records, null, " "));
    //
    //  res.view("homepage", {
    //    records: records,
    //    layout: 'layouts/autodealio'
    //  });
    //});
  }
};
