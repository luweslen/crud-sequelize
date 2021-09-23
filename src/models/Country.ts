import { DataTypes } from 'sequelize';
import { db } from '@/database/db';

export const Country = db.define(
  'Countries',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);
