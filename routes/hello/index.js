/**
 *
 * @param req
 * @param res
 */
export const post = (req, res) => {
    res.json({
        message: 'Hello from POST: /hello'
    })
}