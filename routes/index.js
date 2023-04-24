/**
 *
 * @param req
 * @param res
 */
export const get = (req, res) => {
    res.json({
        method: 'GET',
        message: 'Start from editing routes/index.js',
    })
}