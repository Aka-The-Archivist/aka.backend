/**
 *
 * @param req
 * @param res
 */
export default function get(req, res) {
    res.json({
        message: "codesandbox:aka.backend | jsonwebtoken",
        usage: [
            "generate token: POST => /auth | {...data}",
            "protected page: GET  => /user | {middleware:check}",
        ],
    });
}
