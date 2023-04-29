import {prisma} from "../../../helpers/database.js";

/**
 *
 * @param req
 * @param res
 */
export default async function all(req, res) {

    const {id} = req.params; // get request params

    // Delete data model
    const user = await prisma.user.delete({
        where: {
            id: parseInt(id), // pass only integer
        },
    })

    res.json({
        method: req.method,
        data: user,
    })

}