/**
 *
 * @param req
 * @param res
 */
export default function all(req, res) {

    const {id} = req.params; // get route params

    res.json({
        method: req.method,
        params: id,
        message: 'Start from editing routes/hello/[id].js',
    })
}