/**
* Media.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title:{
      type:"string",
      required:true,
      minLength: 2
    },
    url: {
      type: "string",
      required: true,
      minLength: 2
    },
    mime: {
      type: "string",
      required: true,
      minLength: 2
    },
    size: {
      type: "integer",
      required: false
    },
    order: {
      type: "integer",
      required: false
    },
    record:{
      collection: "record", // match model name
      via: "medias" // match attribute name
    },
    user:{
      collection: "user", // match model name
      via: "medias" // match attribute name
    }
  }
};

