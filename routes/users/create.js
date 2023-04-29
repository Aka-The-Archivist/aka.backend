import database from "../../helpers/database.js";

/**
 *
 * @param req
 * @param res
 */
export default async function post(req, res) {

    const {...data} = req.body; // get route params

    const results = await req.collection.insertOne(data);

    res.json({
        method: req.method,
        data: results,
    })
}