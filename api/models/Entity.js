/**
* Entity.js
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
    attribute_list:{
      collection: "attribute", // match model name here
      via: "parent", // match attribute name on other model
      dominant: true // dominant side
    }
  }
};

