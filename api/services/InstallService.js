module.exports =
{
  initialize : function(cb)
  {
    var config = sails.config.satellite;

    console.log("INSTALL INIT\n%s", JSON.stringify(config, null, "  "));


    cb();
  }
};
