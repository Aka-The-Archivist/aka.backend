/**
 *
 * @param req
 * @param res
 */
export const get = (req, res) => {

    const {id} = req.params; // get query params

    res.json({
        method: 'GET',
        params: id,
        message: 'Start from editing routes/hello/[id].js',
    })
}