const db = require('../../../config/database');
const dayjs = require('dayjs');
const md5 = require('md5');
const table = 'rexpo_account'
module.exports = function () {
    let operations = {
      GET,
      POST,
      PUT,
      PATCH,
      DELETE,
    };
  
    function GET(req, res, next) {
      let query = `SELECT id, 
                  id_card, 
                  id_card_type, 
                  email, 
                  username, 
                  nama, 
                  phone, 
                  tanggal_lahir, 
                  tempat_lahir, 
                  account_type, 
                  namafile,
                  pendidikan FROM `+table+` ORDER BY ID DESC`;
      db.query(query, function(error, rows, fields){
        if(error){
          console.log(error);
          res.status(400).json({error: 'Request failed'})
        }else{
          res.status(200).json(rows);
        }
      });
    }
  
    function POST(req, res, next) {
      let email = req.body.email;
      let nama = req.body.nama;
      let password = req.body.password;
      let phone = req.body.phone;
      let account_type = req.body.account_type;
      let date_created = dayjs().format('YYYY-MM-DD');
      let date_updated = dayjs().format('YYYY-MM-DD');
      let time_created = dayjs().format('HH:mm:ss');
      let time_updated = dayjs().format('HH:mm:ss');
      console.log(time_created)
      let query = `INSERT INTO `+table+` (email, nama, password, phone, account_type, date_created, date_updated, time_created,time_updated) 
                   VALUES('`+email+`','`+nama+`', 'md5(`+password+`)', '`+phone+`', '`+account_type+`', '`+date_created+`','`+date_updated+`','`+time_created+`','`+time_updated+`')`;
      db.query(query, function(error, rows, field){
        if(error){
          res.status(400).json(date_created)
        }else{
          res.status(201).json({message: 'Account created'});
        }
      });
    }
  
    function PUT(req, res, next) {
      let id = req.body.id;
      let email = req.body.email;
      let nama = req.body.nama;
      let password = req.body.password;
      let phone = req.body.phone;
      let account_type = req.body.account_type;
      let date_created = dayjs().format('YYYY-MM-DD');
      let date_updated = dayjs().format('YYYY-MM-DD');
      let time_created = dayjs().format('HH:mm:ss');
      let time_updated = dayjs().format('HH:mm:ss');
      let query = `UPDATE `+table+` 
                  SET 
                  email='`+email+`',
                  nama='`+nama+`',
                  password='`+password+`',
                  phone='`+phone+`',
                  account_type='`+account_type+`',
                  date_created='`+date_created+`',
                  date_updated='`+date_updated+`',
                  time_created='`+time_created+`',
                  time_updated='`+time_updated+`'
                  WHERE
                  id = '`+id+`' `;
      console.log(query); 
      db.query(query, function(error, rows, field){
        if(error){
          console.log(error);
          res.status(400).json(error)
        }else{
          res.status(200).json(rows);
        }
      });
    }


    function PATCH(req, res, next) {
      let id = req.body.id;
      let nama = req.body.nama;
      let date_created = dayjs().format('YYYY-MM-DD');
      let date_updated = dayjs().format('YYYY-MM-DD');
      let time_created = dayjs().format('HH:mm:ss');
      let time_updated = dayjs().format('HH:mm:ss');
      let query = `UPDATE `+table+` 
                  SET 
                  nama='`+nama+`',
                  date_created='`+date_created+`',
                  date_updated='`+date_updated+`',
                  time_created='`+time_created+`',
                  time_updated='`+time_updated+`'
                  WHERE
                  id = '`+id+`' `;
      console.log(query);
      db.query(query, function(error, rows, field){
        if(error){
          console.log(error);
          res.status(400).json(error)
        }else{
          res.status(200).json(rows);
        }
      });
    }
  
    function DELETE(req, res, next) {
      let id = req.query.id;
      let query = `DELETE FROM `+table+` WHERE id = '`+id+`'`;
      db.query(query, function(error, rows, field){
        if(error){
          console.log(error);
          res.status(400).json(error)
        }else{
          res.status(200).json(rows);
        }
      });
    }
  
    GET.apiDoc = {
      summary: "Fetch account.",
      operationId: "getAccount",
      responses: {
        200: {
          description: "List of account.",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/Account",
            },
          },
        },
      },
    };
  
    POST.apiDoc = {
      summary: "Create account.",
      operationId: "createAccount",
      consumes: ["application/x-www-form-urlencoded"],
      parameters : [
        {
          in: "body",
          name : "body",
          description : "Resource payload",
          required : true,
          schema : {
            type : "object",
            properties: {
              email: {
                type: "string"
              },
              nama: {
                type: "string"
              },
              password: {
                type: "string"
              },
              phone: {
                type: "string"
              },
              account_type: {
                type: "string"
              }
            },
            required : ["email", "nama", "password", "phone","account_type"]
          }
        }
      ],
      responses: {
        201: {
          description: "Created",
        },
      },
    };
  
    PUT.apiDoc = {
      summary: "Update account.",
      operationId: "updateAccount",
      consumes: ["application/x-www-form-urlencoded"],
      parameters : [
        {
          in: "body",
          name : "body",
          description : "Resource payload",
          required : true,
          schema : {
            type : "object",
            properties: {
              id: {
                type: "string"
              },
              email: {
                type: "string"
              },
              nama: {
                type: "string"
              },
              password: {
                type: "string"
              },
              phone: {
                type: "string"
              },
              account_type: {
                type: "string"
              }
            },
            required : ["id", "email", "nama", "password", "phone","account_type"]
          }
        }
      ],
      responses: {
        200: {
          description: "Updated ok",
        },
      },
    };

    PATCH.apiDoc = {
      summary: "Update account.",
      operationId: "updateAccount",
      consumes: ["application/x-www-form-urlencoded"],
      parameters : [
        {
          in: "body",
          name : "body",
          description : "Resource payload",
          required : true,
          schema : {
            type : "object",
            properties: {
              id: {
                type: "string"
              },
              nama: {
                type: "string"
              }
            },
            required : ["id", "nama"]
          }
        }
      ],
      responses: {
        200: {
          description: "Updated ok",
        },
      },
    };
  
    DELETE.apiDoc = {
      summary: "Delete account.",
      operationId: "deleteAccount",
      consumes: ["application/json"],
      parameters: [
        {
          in: "query",
          name: "id",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "Delete",
        },
      },
    };
  
    return operations;
  };
  