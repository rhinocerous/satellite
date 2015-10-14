module.exports.satellite = {
  defaults:{
    scopes: [
      {
        name: "root",
        weight: 1000
      },
      {
        name: "site",
        weight: 100
      },
      {
        name: "template",
        weight: 75
      },
      {
        name: "role",
        weight: 50
      },
      {
        name: "user",
        weight: 25
      }
    ]
    , groups: [

      {
        name: "Roles",
        slug:"roles",
        scope:"site"
      },
      {
        name: "Navigation",
        slug:"nav",
        scope:"role"
      },
      {
        name: "Content",
        slug:"content",
        scope:"user"
      },
      {
        name: "Settings",
        slug:"settings",
        scope:"site"
      },
      {
        name: "Template",
        slug:"template",
        scope:"template"
      },
      {
        name: "Root",
        slug:"root",
        scope:"root"
      }
    ]
    , settings:{
      headerMain:"Satellite Admin"
      , headerSecond: "Satellite Website Administrator"
      , headerTagline: "powered by Rhinocero.us"
      , footerName: "Rhinocero.us"
      , footerCopyrightYear: "2015"
      , footerUrl: "http://rhinocero.us"
    }
  }
  , skeletons:{
    actor:{
      schema:{}
      ,values:{}
    }
    , smallBusiness:{}
    , vehicleDirectory:{
      schema:{
        vehicle:{
            vehicleId: "string",
            programId: "string",
            dealerId: "string",
            zipCode: "string",
            radius: "integer",
            phoneNumber: "string",
            vin: "string",
            stockNumber: "string",
            year: "integer",
            make: "string",
            model: "string",
            series: "string",
            mileage: "integer",
            price: "float",
            interiorColor: "string",
            exteriorColor: "string",
            numDoors: "integer",
            numCylinders: "integer",
            transmissionType: "string",
            certifiedPreowned: "boolean",
            comments: "text",
            features: "json",
            imageUrls: "json",
            categories: "json",
            city: "string",
            state: "string",
            today: "date",
            imported: "date",
            lat: "float",
            lon: "float"
           }
        , zipCode:{
            country: "string",
            zip_code: "integer",
            zip_string: "string",
            city: "string",
            state_name: "string",
            state: "string",
            region: "string",
            code: "integer",
            lat: "float",
            lon: "float"
          }
        , lead:{
          firstName:"string"
          , lastName:"string"
          , phone:"string"
          , address:"string"
          , email:"string"
          , status:"string"
          , created:"datetime"
          , request:"text"
          , response:"text"
          , responseCode:"text"
        }
        , make: {
          name:"string"
          , slug:"string"
          , logo:"string"
        }
        , model: {
          name:"string"
          , slug:"string"
          , logo:"string"
        }
        , category: {
          name:"string"
          , slug:"string"
        }
      }
      ,values:{}
    }
    , team:{
      schema:{}
      ,values:{}
    }
    , istuntTeam:{
      schema:{}
      ,values:{}
    }
    , istuntSingle:{
      schema:{}
      ,values:{}
    }
  }
};
