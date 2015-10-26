/**
* Website.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  exist:[],
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
    url:{
      type:"string",
      required:true,
      minLength: 2
    },
    skeleton:{
      type:"string",
      required:true
    },
    active:{
      type:"boolean",
      required:false
    },
    entities:{
      collection: 'entity',
      via: 'websites'
    },
    records:{
      collection: 'record',
      via: 'website'
    }

  }
};

