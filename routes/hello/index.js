/**
 *
 * @param req
 * @param res
 */
export const post = (req, res) => {

    const {...data} = req.body; // get post params

    res.json({
        method: 'POST',
        data: data,
        message: 'Start from editing routes/hello/index.js',
    })
}