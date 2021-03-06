module.exports =
{
  index: function (req, res) {
    OutputService.getRecords(467, function(err, records){ //  TODO: hook up userId and manage it properly

      if(err)
        return res.serverError(err);

      res.view("homepage", {
        records: records,
        layout: 'layouts/layout_stuntfights'
      });
    });
  },
  alternate: function (req, res) {
    res.view("homepage", {layout: 'layouts/layout'}); //  now we specify an alternate layout
  },
  admin: function (req, res) {
    res.view("homepage", {layout: 'layouts/admin'}); //  now we specify an alternate layout
  }
};
