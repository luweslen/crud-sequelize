import { DataTypes } from 'sequelize';
import { db } from '@/database/db';
import { Country } from './Country';

const city = db.define(
  'Cities',
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
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

city.belongsTo(Country, {
  constraints: true,
  foreignKey: 'countryid',
});

export const City = city;
