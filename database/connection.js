/**
 * This file is responsible for connecting to the database and performing operations on it.
 *
 * Add more functions to interact with the database.
 * Then add them to the module.exports object.
 */
const { MongoClient } = require("mongodb");

// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.MONGO_DB;

async function connect() {
  await client.connect();
  console.log("Connected successfully to mongo server");
  const db = client.db(dbName);
  // Use the collection
  const collection = db.collection(process.env.MONGO_COLLECTION);
  return collection;
}

async function insertMany(objects) {
  let result;

  await connect().then(async (collection) => {
    result = await collection.insertMany(objects);
  })
    .catch(console.error)
    .finally(() => client.close());
  return result;
}

async function findAll() {
  let result;
  await connect().then(async (collection) => {
    result = await collection.find({}).toArray();
  })
    .catch(console.error)
    .finally(() => client.close());
  return result;
}

// add more functions
// https://github.com/mongodb/node-mongodb-native?tab=readme-ov-file#insert-a-document

module.exports = { insertMany, findAll };
