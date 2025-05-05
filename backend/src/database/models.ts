import { DataTypes } from 'sequelize';
import connector from './connector';

export const Note = connector.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  markdown: DataTypes.TEXT,
});
