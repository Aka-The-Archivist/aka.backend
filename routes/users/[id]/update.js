import {prisma} from "../../../helpers/database.js";

/**
 *
 * @param req
 * @param res
 */
export default async function patch(req, res) {

    const {id} = req.params; // get request params
    const {...data} = req.body; // get request body

    // Update data model
    const user = await prisma.user.update({
        where: {
            id: parseInt(id), // pass only integer
        },
        data: data,
    })

    res.json({
        method: req.method,
        data: user,
    })

}