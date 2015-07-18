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
      minLength: 2
    },
    description:{
      type:"text",
      required:false
    },
    parent:{
      collection: "entity", // match model name
      via: "attributes" // match attribute name
    }
  }
};

