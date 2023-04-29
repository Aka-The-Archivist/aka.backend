import {prisma} from "../../helpers/database.js";

/** @middleware
 |--------------------------------------------------------------------------
 | custom.js middleware
 |--------------------------------------------------------------------------
 |
 | In Express.js, a middleware function is a function that has access to the
 | request object (req), the response object (res), and the next middleware
 | function in the application's request-response cycle. A middleware function
 | can execute any code, modify the request and response objects, end the
 | request-response cycle, or call the next middleware function in the stack.
 |
 */
export default ['/users/:id', async (req, res, next) => {

    if (req.method === 'GET' || req.method === 'PATCH' || req.method === 'DELETE') {

        // handle validation result first middleware
        const {id} = req.params;

        // handle validation errors
        if (!id || isNaN(id)) {
            return res.status(422).json({
                id: 'required'
            })
        }

        // check if unique
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id), // pass only integer
            }
        })

        if (!user) return res.status(422).json({
            user: 'not found',
        })
    }

    next()
}]