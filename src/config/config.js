require('dotenv').config();

module.exports = {
  development: {
    app_port: process.env.APP_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    secreat: process.env.SECREAT_KEY,
    version: process.env.API_VERSION
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.PASSWORD_TEST,
    database: process.env.DATABASE_TEST,
    host: process.env.HOST_TEST,
    port: process.env.PORT_TEST,
    dialect: process.env.DIALECT_TEST,
    secreat: process.env.SECREAT_KEY
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    secreat: process.env.SECREAT_KEY
  }
};
