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
export default ['/users/create', async (req, res, next) => {

    if (req.method === 'POST') {

        // handle validation result first middleware
        const {name, email} = req.body;

        // required params body
        if (!name || !email) return res.status(422).json({
            name: 'required',
            email: 'required',
        })

        // handle simple validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(422).json({
            email: 'not valid',
        })

        // check if unique
        const user = await prisma.user.findUnique({where: {email}})

        if (user) return res.status(422).json({
            email: 'already taken',
        })
    }

    next()
}]