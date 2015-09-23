module.exports =
{
  initialize : function(cb)
  {
    var config = sails.config.satellite;

    Scope.find(function (err, scopes) {

      if (err)
        return cb(err);

      if(scopes && scopes.length > 0)
        return cb("Satellite cannot be initialized because it is already installed.");


      var out = [];

      config.defaults.scopes.forEach(function(scope, index){

        scope.groups = [];

        config.defaults.groups.forEach(function(group, gi){
          if(group.scope == scope.name)
          {
            delete group.scope;
            scope.groups.push(group);
          }

        });

        out.push(scope);
      });

      async.map(out, insertScope, function (err, result) {

        if(!err) {

          Scope.find()
          .populate('groups')
          .exec(function(err, allScopes) {

              cb(err, allScopes);
          });


          //console.log("FINISHED\n%s", JSON.stringify(result, null, "  "));

        } else {
          console.log("ERROR\n%s", JSON.stringify(err, null, "  "));
        }



      });

      function insertScope(scope, callback) {
        Scope.create(scope).exec(function (err, newScope) {
          callback(err, newScope);
        });
      }

      console.log("sorted scopes\n%s", JSON.stringify(out, null, "  "));
    });

  }
};
