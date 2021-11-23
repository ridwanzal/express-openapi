const db = require('../../../config/database');
const table = 'rexpo_account'
module.exports = function () {
    let operations = {
      GET,
      POST,
      PUT,
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
                   pendidikan FROM `+table+``;
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
      let account_type = req.body.account_type;
      let date_created = 
      let query = `INSERT INTO rexpo_account (email, nama, password, phone, account_type, date_created, date_updated, time_created,time_updated) 
                   VALUES('zbinaridwan@gmail.com','M. Ridwan Zalbina', '25d55ad283aa400af464c76d713c07ad', '081919992000', 'peserta', '2021-06-18','2021-06-18','14:09:08','14:09:08')`;
      db.query(query, function(error, rows, field){
        if(error){
          console.log(error);
          res.status(400).json({error: 'Request failed'})
        }else{
          res.status(200).json(rows);
        }
      });
    }
  
    function PUT(req, res, next) {
      console.log(`About to update todo id: ${req.query.id}`);
      res.status(200).send();
    }
  
    function DELETE(req, res, next) {
      console.log(`About to delete todo id: ${req.query.id}`);
      res.status(200).send();
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
      consumes: ["application/json"],
      responses: {
        201: {
          description: "Created",
        },
      },
    };
  
    PUT.apiDoc = {
      summary: "Update account.",
      operationId: "updateAccount",
      parameters: [
        {
          in: "query",
          name: "id",
          required: true,
          type: "string",
        },
        {
          in: "body",
          name: "todo",
          schema: {
            $ref: "#/definitions/Account",
          },
        },
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
  