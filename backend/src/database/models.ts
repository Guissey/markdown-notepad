import { DataTypes } from 'sequelize';
import sequelize from "./connector";

export const Note = sequelize.define('Note', {
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
