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
    Account: {
      type: "object",
      properties:  {
        id: {
          type: "number"
        },
        id_card_type: {
          type: "number"
        },
        email: {
          type: "string"
        },
        username: {
          type: "string"
        },
        nim: {
          type: "string"
        },
        nama: {
          type: "string"
        },
        password: {
          type: "string"
        },
        password_plain: {
          type: "string"
        },
        phone: {
          type: "number"
        },    
        tanggal_lahir: {
          type: "string"
        },
        tempat_lahir: {
          type: "string"
        },
        account_type: {
          type: "string"
        },
        namafile: {
          type: "string"
        },
        pendidikan: {
          type: "string"
        },
        id_prodi : {
          type: "string"
        },
        universitas : {
          type: "string"
        },
        fakultas : {
          type: "string"
        },
        jurusan : {
          type: "string"
        },
        tahun_lulus : {
          type: "string"
        },
        comp_bidang_usaha : {
          type: "string"
        },
        comp_deskripsi : {
          type: "string"
        },
        comp_website : {
          type: "string"
        },
        comp_contact_person : {
          type: "string"
        },
        comp_alamat : {
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
        },
        status : {
          type: "number"
        }
      }
    }
  },
  paths: {},
};

module.exports = apiDoc;
