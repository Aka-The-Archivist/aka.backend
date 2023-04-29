import { MongoClient } from "mongodb";

const connectionString = process.env.DATABASE_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

const database = conn.db("sample_training");

export default database;