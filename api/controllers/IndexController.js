module.exports =
{
  index: function (req, res) {
    res.view("homepage", {}); //  default index from config/views.js is used since we don't specify a layout
  },
  alternate: function (req, res) {
    res.view("homepage", {layout: 'layouts/layout'}); //  now we specify an alternate layout
  },
  admin: function (req, res) {
    res.view("homepage", {layout: 'layouts/admin'}); //  now we specify an alternate layout
  }
};
