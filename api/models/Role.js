/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:"string"
      , required:true
      , unique: true
    },
    weight:{
      type:"integer"
      , required:true
    },
    users:{
      collection: "user", // match model name here
      via: "roles" // match attribute name on other model
    }
  }
};

