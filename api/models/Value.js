/**
* Value.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    record:{
      collection: "record",
      via: "values"
    },
    attribute:{
      model: 'attribute'
    },
    valString:{
      type:"text",
      required:false
    },
    valText:{
      type:"text",
      required:false
    },
    valInt:{
      type:"integer",
      required:false
    },
    valDecimal:{
      type:"float",
      required:false
    },
    valDatetime:{
      type:"datetime",
      required:false
    },
    valDate:{
      type:"date",
      required:false
    },
    valBool:{
      type:"boolean",
      required:false
    },
    valJson:{
      type:"json",
      required:false
    }
  }
};

