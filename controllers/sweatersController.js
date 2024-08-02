const express = require("express");
const sweaters = express.Router();


// const reviewsController = require('./reviewsController')
// sweaters.use('/:sweaters_id/reviews', reviewsController)

// const {
//     getAllsweaters, 
//     getOneSong,
//     addOneSong,
//     updateSongInformation,
//     deleteSong,
//     // getAscOrder
// } = require("../queries/sweaters");

// const {checkValidUpdateInfo, confirmDeletionInfo} = require('../validations/sweatersValidations')

// // sweaters.get("/", async (req, res)=>{
// //     const { order } = req.query;
// //     const ascsweaters = getAscOrder();

// //     if(order === "asc"){
// //         res.status(200).json(ascsweaters);
// //     }else{
// //         res.status(500).json({ error: "sweaters could not be created in ascending order." });
// //     }
// // });

// sweaters.get("/", async (req, res) => {
//     const allsweaters = await getAllsweaters();
//     if (allsweaters[0]) {
//       res.status(200).json(allsweaters);
//     } else {
//       res.status(500).json({ error: "No sweaters are in the database" });
//     }
//   });


// sweaters.get("/:id", async (req, res) => {
//     const { id } = req.params;
//     const oneSong = await getOneSong(id);
//     if (oneSong) {
//       res.status(200).json(oneSong);
//     } else {
//       res.status(500).json({ error: "Invalid ID number, song not found" });
//     }
//   });


// sweaters.post("/", checkValidUpdateInfo, async (req, res) => {
//     const addSong = await addOneSong(req.body);
//     res.status(201).json({Message: "Song has been successfully added to the database"});
//   });

// sweaters.put("/:id", checkValidUpdateInfo, async (req,res)=>{
//     const newInfo = req.body;
//     const { id } = req.params;
//     const updateSongInfo = await updateSongInformation(id, newInfo);
//     if(updateSongInfo.id){
//         res.status(200).json({Message: "Song has been successfully updated within the database"});
//     }else{
//         res.status(404).json({ error: "Song Can Not Be Found" });
//     }
// });


// sweaters.delete("/:id", async (req, res) => {
//     const { id } = req.params;
//     const deletedSong = await deleteSong(id);
    
//     if(deletedSong.id) {
//         res.status(200).json({ message: `The song called "${deletedSong.name}" has been deleted.` });
//     } else {
//         res.status(404).json( {error: "Song could not be deleted" });
//     }
// });


  module.exports = sweaters;