import {ObjectId} from "mongodb";

/**
 *
 * @param req
 * @param res
 */
export default async function get(req, res) {

    const {id} = req.params; // get route params

    const results = await req.collection.findOne({_id: new ObjectId(id)});

    res.json({
        method: req.method,
        data: results,
    })

}