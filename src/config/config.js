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
    version: process.env.API_VERSION,
    forget_secreat: process.env.FORGET_SECRE
  },
  test: {
    app_port: process.env.APP_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    secreat: process.env.SECREAT_KEY,
    version: process.env.API_VERSION,
    forget_secreat: process.env.FORGET_SECRE
  },
  production: {
    app_port: process.env.APP_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    secreat: process.env.SECREAT_KEY,
    version: process.env.API_VERSION,
    forget_secreat: process.env.FORGET_SECRE
  }
};
