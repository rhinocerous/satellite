/**
 * AdminController
 *
 * @description :: Server-side logic for managing small websites
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports =
{
  index: function (req, res)
  {
    res.view("admin/index",{
      layout: 'admin/layout',
      current_page: "admin_index",
      page_params: { }
    });
  }
};

