import jwt from "jsonwebtoken";

/**
 *
 * @param req
 * @param res
 */
export default function post(req, res) {

    const {...user} = req.body;

    res.json({
        token: jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: "1800s"}),
    });
}
