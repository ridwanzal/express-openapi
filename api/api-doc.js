/**
 * Define model below defeinitions object
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
    Todo: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
        message: {
          type: "string",
        },
      },
      required: ["id", "message"],
    },
    User: {
      type: "object",
      properties:  {
        id: {
          type: "number"
        },
        name : {
          type: "string"
        },
        gender : {
          type: "string"
        }
      }
    }
  },
  paths: {},
};

module.exports = apiDoc;
