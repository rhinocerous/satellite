(function() {
  'use strict';

//  encapsulate logic of turning a parsed EAV entity into schema-form compatible json
//  see https://github.com/Textalk/angular-schema-form
satellite.ng.app.services.formServiceFactory = function ($baseService)
{
  var svc = this;

  $.extend( svc, $baseService);

  svc.parseEntityForm = _parseEntityForm;
  svc.parseEntitySchema = _parseEntitySchema;

  function _parseEntityForm(entity)
  {
    var form = [];

    angular.forEach(entity.headers, function(attr, idx) {
      form.push({
        key:attr.slug,
        type:attr.type,
        placeholder:attr.name
      })
    });

    return form;
  }

  function _parseEntitySchema(entity)
  {
    var schema = {
      type: "object",
      title: entity.name,
      properties:{}
    };

    angular.forEach(entity.headers, function(attr, idx) {
      schema.properties[attr.slug] = {
        "title": attr.name,
        "type": attr.type
      }
    });

    return schema;
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$formService"
  , ["$baseService"]
  , satellite.ng.app.services.formServiceFactory);


//vm.form = [
//  "name",
//  "email",
//  {
//    "key": "comment",
//    "type": "textarea",
//    "placeholder": "Make a comment"
//  },
//  {
//    "type": "submit",
//    "style": "btn-info",
//    "title": "OK"
//  }
//];
//
//vm.schema = {
//  "type": "object",
//  "title": "Comment",
//  "properties": {
//    "name": {
//      "title": "Name",
//      "type": "string"
//    },
//    "email": {
//      "title": "Email",
//      "type": "string",
//      "pattern": "^\\S+@\\S+$",
//      "description": "Email will be used for evil."
//    },
//    "comment": {
//      "title": "Comment",
//      "type": "string",
//      "maxLength": 20,
//      "validationMessage": "Don't be greedy!"
//    }
//  },
//  "required": [
//    "name",
//    "email",
//    "comment"
//  ]
//};


//"film_credits": {
//
//  "name": "Film Credits",
//    "slug": "film_credits",
//    "group": "resume",
//    "description": null,
//    "active": true,
//    "id": 4,
//    "createdAt": "2015-07-18T21:22:44.000Z",
//    "updatedAt": "2015-07-18T21:22:52.000Z",
//    "values":
//
//  [
//
//    {
//
//      "id": 2,
//      "project_title": "G.I. Joe",
//      "role_position": "Fight Coordinator",
//      "company_director": "George Marshall Ruge"
//
//    },
//  .....
//  ],
//    "headers":
//  {
//
//    "project_title":
//
//    {
//
//      "parent": [ ],
//      "name": "Project Title",
//      "slug": "project_title",
//      "type": "string",
//      "description": null,
//      "id": 4,
//      "createdAt": "2015-07-18T21:22:43.000Z",
//      "updatedAt": "2015-07-18T21:22:43.000Z"
//
//    },
//    "role_position":
//    {
//
//      "parent": [ ],
//      "name": "Role Position",
//      "slug": "role_position",
//      "type": "string",
//      "description": null,
//      "id": 6,
//      "createdAt": "2015-07-18T21:22:43.000Z",
//      "updatedAt": "2015-07-18T21:22:43.000Z"
//
//    },
//    "company_director":
//
//    {
//      "parent": [ ],
//      "name": "Company Director",
//      "slug": "company_director",
//      "type": "string",
//      "description": null,
//      "id": 7,
//      "createdAt": "2015-07-18T21:22:43.000Z",
//      "updatedAt": "2015-07-18T21:22:43.000Z"
//    }
//  }
//
//},

})();
