/**
 * SiteController
 *
 * @description :: Server-side logic for running small websites
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports =
{
  index: function (req, res)
  {
    res.view("homepage",{
      layout: 'layout_site',
      current_page: "home",
      page_params: { }
    });
  }
};

