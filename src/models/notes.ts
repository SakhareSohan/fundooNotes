'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Notes extends Model {
        public title: string;
        public description: string;
        public color: string;
        public archive: boolean;
        public trash: boolean;
        public createdBy: number; // foreign key for user ID
    };
    Notes.init(
        {
            title: {
              type: DataTypes.STRING,
              allowNull: true,
            },
            description: {
              type: DataTypes.STRING,
              allowNull: true,
            },
            color: {
              type: DataTypes.STRING,
              defaultValue: 'white',
            },
            archive: {
              type: DataTypes.BOOLEAN,
              defaultValue: false,
            },
            trash: {
              type: DataTypes.BOOLEAN,
              defaultValue: false,
            },
            createdBy: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
          },
          {
            sequelize,
            modelName: 'notes',
            schema: 'fundoonotes',
            // timestamps: false
          }
        );
    return Notes;
}