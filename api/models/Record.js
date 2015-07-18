/**
* Record.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userId:{
      type:"integer",
      required:false
    },
    order:{
      type:"integer",
      required:true
    },
    entity:{
      model: 'entity'
    },
    values:{
      collection: "value", // match model name here
      via: "record", // match attribute name on other model
      dominant: true // dominant side
    }
  }
};

