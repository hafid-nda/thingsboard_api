require('dotenv').config(); 

// var http = require("http");
// var options = {
//   host: "proxy",
//   port: 9905,
//   path: "http://103.157.27.219:9905/",
//   headers: {
//     Host: "http://103.157.27.219:9905/"
//   }
// };
// http.get(options, function(res) {
//   console.log(res);
//   res.pipe(process.stdout);
// });

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_NAME,
  DB_DIALECT
} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "host": DB_HOSTNAME,
    "database": DB_NAME,
    "dialect": DB_DIALECT
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "host": DB_HOSTNAME,
    "database": DB_NAME, 
    "dialect": DB_DIALECT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "host": DB_HOSTNAME,
    "database": DB_NAME,
    "dialect": DB_DIALECT
  },
}
