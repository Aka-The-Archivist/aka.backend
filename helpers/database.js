import {MongoClient} from "mongodb";

/**
 *
 * @type {*|string}
 */
const connectionString = process.env.ATLAS_URI || "";

/**
 *
 * @type {MongoClient}
 */
const client = new MongoClient(connectionString);

/**
 *
 * @type {MongoClient}
 */
const conn = await client.connect();

/**
 *
 * @type {Db}
 */
const database = conn.db();

export default database;