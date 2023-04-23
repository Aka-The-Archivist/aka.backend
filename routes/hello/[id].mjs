/**
 *
 * @param req
 * @param res
 */
export const get = (req, res) => {
    res.json({
        message: `Hello from GET: /hello/${req.params.id}`
    })
}