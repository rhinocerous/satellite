module.exports =
{
  index: function (req, res) {
    res.view("homepage", {}); //  default index from config/views.js is used since we don't specify a layout
  },
  alternate: function (req, res) {
    res.view("homepage", {layout: 'layout_alternate'}); //  now we specify an alternate layout
  }
};
