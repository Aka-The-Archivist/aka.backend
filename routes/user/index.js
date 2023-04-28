/**
 *
 * @param req
 * @param res
 */
export default function get(req, res) {
    res.json({
        method: "GET",
        user: req.user,
    });
}
