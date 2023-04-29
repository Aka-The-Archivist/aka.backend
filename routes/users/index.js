import {prisma} from "../../helpers/database.js";

/**
 *
 * @param req
 * @param res
 */
export default async function get(req, res) {

    // Find all model
    const users = await prisma.user.findMany()

    res.json({
        method: req.method,
        data: users,
    })
}