import {prisma} from "../../../helpers/database.js";

/**
 *
 * @param req
 * @param res
 */
export default async function get(req, res) {

    const {id} = req.params; // get request params

    // By ID
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id), // pass only integer
        },
    })

    res.json({
        method: req.method,
        data: user,
    })
}