import { Sequelize } from 'sequelize';

const databaseName = (process.env.DEV === 'true')
  ? 'markdown_notepad_test'
  : 'markdown_notepad';
console.log(`Using ${databaseName} database`)

const sequelize = new Sequelize(databaseName, 'webserver', 'webserver', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;
