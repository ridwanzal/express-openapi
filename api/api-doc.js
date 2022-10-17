/**
 * Define model below definition object
 * if you have table in your relational database, put the attribute here
 * for eg: Todo, Users
 */

const apiDoc = {
  swagger: "2.0",
  basePath: "/",
  info: {
    title: "M2 API docs",
    version: "1.0.0",
  },
  definitions: {
    Account: {
      type: "object",
      properties:  {
        id: {
          type: "number"
        },
        email: {
          type: "string"
        },
        username: {
          type: "string"
        },
        nama: {
          type: "string"
        },
        password: {
          type: "string"
        },
        phone: {
          type: "number"
        },
        account_type: {
          type: "string"
        },
        date_created : {
          type: "number"
        },
        date_updated : {
          type: "number"
        },
        time_created : {
          type: "number"
        },
        time_updated : {
          type: "number"
        }
      }
    }
  },
  paths: {},
};

module.exports = apiDoc;
