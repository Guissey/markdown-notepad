import { Sequelize } from 'sequelize';

const { DEV, DEV_DATABASE_NAME, PROD_DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

if (!DEV_DATABASE_NAME || !PROD_DATABASE_NAME || !DATABASE_USERNAME || !DATABASE_PASSWORD ) {
  throw new Error('Database connection failed: database env values are not all set, check .env file');
}

const databaseName = (DEV === 'true')
  ? DEV_DATABASE_NAME
  : PROD_DATABASE_NAME;
console.log(`Using '${databaseName}' database`);

const connector = new Sequelize(databaseName, DATABASE_USERNAME, DATABASE_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
});

export default connector;
