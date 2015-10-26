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
      schema:{
        project:[
          'group',
          'title',
          'intro',
          'body',
          'url',
          'videoUrl',
          'videoSource'
        ],
        about:[
          'title',
          'intro',
          'body'
        ],
        slide:[
          'primary',
          'secondary',
          'link',
          'background'
        ],
        navigation:[
          'title',
          'link'
        ]
      }
      ,values:{}
    }
    , smallBusiness:{}
    , vehicleDirectory:{
      schema:{
        vehicle:[
            'vehicleId',
            'programId',
            'dealerId',
            'zipCode',
            'radius',
            'phoneNumber',
            'vin',
            'stockNumber',
            'year',
            'make',
            'model',
            'series',
            'mileage',
            'price',
            'interiorColor',
            'exteriorColor',
            'numDoors',
            'numCylinders',
            'transmissionType',
            'certifiedPreowned',
            'comments',
            'features',
            'imageUrls',
            'categories',
            'city',
            'state',
            'today',
            'imported',
            'lat',
            'lon'
           ]
        , zipCode:[
            'country',
            'zip_code',
            'zip_string',
            'city',
            'state_name',
            'state',
            'region',
            'code',
            'lat',
            'lon',
          ]
        , lead:[
          'firstName',
           'lastName',
           'phone',
           'address',
           'email',
           'status',
           'created',
           'request',
           'response',
           'responseCode'
        ]
        , make: [
          'name'
          , 'slug'
          , 'logo'
        ]
        , model: [
          'name'
          , 'slug'
          , 'logo'
        ]
        , category: [
          'name'
          , 'slug'
          , 'logo'
        ]
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
