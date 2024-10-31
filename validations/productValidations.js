
// const checkValidNewInfo = async (req, res, next) => {
//     const db = require("../db/dbConfig.js");
//     const list = await db.any('SELECT * FROM Products');
//     const newInfo = req.body;

//     for (let existingData of list) {
//         if (existingData.type_of_clothing === newInfo.type_of_clothing) {
//             res.status(400).json({ error: "You must update the existing inventory" });
//         } else {
//             return next();
//         }
//     }
// };

// module.exports = checkValidNewInfo;