module.exports.models = {
  defaults:{

    scopes: [
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
    ],
    groups: [

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
      }
    ]
  }
};
