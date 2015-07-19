/**
* Attribute.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:"string",
      required:true,
      minLength: 2
    },
    slug:{
      type:"string",
      required:true,
      minLength: 2,
      unique: true
    },
    type:{
      type:"string",
      required:true,
      enum: ['string', 'text', 'int','decimal', 'bool','date','datetime','json']
    },
    description:{
      type:"text",
      required:false
    },
    parent:{
      collection: "entity", // match model name
      via: "attributes" // match attribute name
    }
  },
  getAllSorted:function(cb)
  {
    Attribute.find()
      .exec(function (err, attrs) {

        if(err)
          return cb(err);

        var out = {};

        attrs.forEach(function(attr) {
          out[attr.id] = attr;
        });

        cb(null, out);
      });
  }
};

