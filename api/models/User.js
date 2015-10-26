var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    medias:{
      collection: "media", // match model name
      via: "user" // match attribute name
    },
    records:{
      collection: "record", // match model name
      via: "user" // match attribute name
    },
    roles:{
      collection: "role", // match model name here
      via: "users", // match attribute name on other model
      dominant: true // dominant side
    }
  }

};

module.exports = User;
