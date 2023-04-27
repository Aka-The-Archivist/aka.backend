/**
 *
 * @param req
 * @param res
 */
export default function get(req, res) {
    res.json({
        method: 'GET',
        message: 'Start from editing routes/index.js',
    })
}