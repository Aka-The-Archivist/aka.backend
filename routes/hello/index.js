/**
 *
 * @param req
 * @param res
 */
export default function post(req, res) {

    const {...data} = req.body; // get post params

    res.json({
        method: req.method,
        data: data,
        message: 'Start from editing routes/hello/index.js',
    })
}