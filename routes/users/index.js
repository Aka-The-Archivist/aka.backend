/**
 *
 * @param req
 * @param res
 */
export default async function get(req, res) {

    const results = await req.collection.find({}).limit(50).toArray();

    res.json({
        method: req.method,
        data: results,
    })
}