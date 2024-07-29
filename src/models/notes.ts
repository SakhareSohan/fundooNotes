// 'use strict';
// import { Model } from 'sequelize';


// export default (sequelize, DataTypes) => {
//     class notes extends Model {
//         public title: string;
//         public description: string;
//         public color: string;
//         public archive: boolean;
//         public trash: boolean;
//         public createdBy: string; // foreign key for user ID
//     };
//     notes.init({
//         title: {
//             type: DataTypes.String,

//         },
//         description: {
//             type: DataTypes.String,
//         },
//         color: {
//             type: DataTypes.String,
//         },
//         archive: {
//             type: DataTypes.Boolean,
//         },
//         trash: {
//             type: DataTypes.Boolean,
//         },
//         createdBy: {
//             type: DataTypes.String,
//         }
//     },{
//         sequelize,
//         modelName: 'notes',
//         schema: 'fundoonotes'
//     });
//     return notes;
// }