module.exports =
{
  index: function (req, res) {
    OutputService.getRecords(467, function (err, records) { //  TODO: hook up userId and manage it properly

      if (err)
        return res.serverError(err);

      res.view("homepage", {
        records: records,
        layout: 'layouts/layout_stuntfights'
      });
    });
  },
  actor: function (req, res) {

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
  admin: function (req, res) {

    Scope.find(function (err, scopes) {

      if(err)
        console.log("error finding scopes\n%s", JSON.stringify(err, null, " "));

      res.view("homepage", {
        layout: 'layouts/admin',
        satellite:{
          scopes:scopes
          , config: sails.config.satellite
        }
      });
    });
  }
};
