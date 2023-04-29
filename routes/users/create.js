import {prisma} from "../../helpers/database.js";

/**
 *
 * @param req
 * @param res
 */
export default async function post(req, res) {

    const {...data} = req.body; // get request params

    // Create data model
    const user = await prisma.user.create({
        data: data,
    })

    res.json({
        method: req.method,
        data: user,
    })
}