const {getDatabase} = require('./mongo');

const collectionName = 'menus';

async function insertMenus(menus) {
    const database = await getDatabase();
    const {insertedId} = await database.collection(collectionName).insertMany(menus);
    return insertedId;
}

async function getMenus() {
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
  insertMenus,
  getMenus,
};