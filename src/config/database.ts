import { DataTypes, Sequelize } from 'sequelize';
// import Logger from './logger';

// Config File import
import config from './config';
// import dotenv from 'dotenv';
// dotenv.config();

export { DataTypes } from 'sequelize';

// const logger = Logger.logger;

let DATABASE = config.development.database;
let USERNAME = config.development.username;
let PASSWORD = config.development.password;
let HOST = config.development.host;
let PORT = parseInt(config.development.port);

if (process.env.NODE_ENV === 'test') {
  DATABASE = config.test.database;
  USERNAME = config.test.username;
  PASSWORD = config.test.password;
  HOST = config.test.host;
  PORT = parseInt(config.test.port);
}

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database.');
    // logger.info('Connected to the database.');
  })  
  .catch((error) => {
    console.log('Could not connect to the database.', error.message);
    // logger.error('Could not connect to the database.', error);
  });

sequelize.sync()

export default sequelize;
