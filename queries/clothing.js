const db = require("../db/dbConfig.js");

const getAllClothes = async () => {
    try{
        const listOfClothing = await db.any("SELECT * FROM clothes");
        return listOfClothing;
    }catch(err){
        return err;
    }
};

const getOneTypeOfClothing = async (type) => {
    try{
        const listOfSpecificClothing = await db.any("SELECT * FROM clothes WHERE type_of_clothing ILIKE $1",type);
        return listOfSpecificClothing;
    }catch(err){
        return err;
    }
};

const addClothingItem = async (newItem) => {
    try{
        const addItem = await db.one(
            "INSERT INTO clothes (type_of_clothing, size, price, stock, season_collection, description) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [
            newItem.type_of_clothing,
            newItem.size,
            newItem.price,
            newItem.stock,
            newItem.season_collection,
            newItem.description
        ])
        return addItem;
    }catch(err){
        return err;
    }
};

const updateClotheInformation = async (updateItem) => {
    try{
        const addItem = await db.one(
            "INSERT INTO clothes (type_of_clothing, size, price, stock, season_collection, description) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [
            newItem.type_of_clothing,
            newItem.size,
            newItem.price,
            newItem.stock,
            newItem.season_collection,
            newItem.description
        ])
        return addItem;
    }catch(err){
        return err;
    }
};




module.exports ={ 
    getAllClothes, 
    getOneTypeOfClothing,
    addClothingItem,
    updateClotheInformation
};