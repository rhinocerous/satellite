module.exports = {

  index: function (req, res) {
    res.view('homepage', {layout: 'layout_alternate' });
  }

};
