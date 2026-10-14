const {getDatabase} = require('./mongo');

const collectionName = 'menus';

async function getMenus() {
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
  getMenus,
};