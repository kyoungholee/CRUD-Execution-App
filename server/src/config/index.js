const dotenv = require('dotenv');

dotenv.config();


const dbConfig = {
  host : process.env.DB_HOST,
  database: process.env.DB_database,
  port : process.env.DB_port,
};

const getDBUri = () => {
  const localUri = `mongodb://${dbConfig.host}:${dbConfig.database}/${dbConfig.post}`;
  return localUri;
};

module.exports = {getDBUri};

