/**
 *
 * @param req
 * @param res
 */
export default function get(req, res) {
    res.json({
        method: req.method,
        message: 'Start from editing routes/index.js',
    })
}