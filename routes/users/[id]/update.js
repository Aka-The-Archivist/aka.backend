import {ObjectId} from "mongodb";

/**
 *
 * @param req
 * @param res
 */
export default async function patch(req, res) {

    const {id} = req.params; // get route params
    const {...data} = req.body; // get route params

    const results = await req.collection.updateOne({_id: new ObjectId(id)}, {
        $set: data
    });

    res.json({
        method: req.method,
        data: results,
    })
}