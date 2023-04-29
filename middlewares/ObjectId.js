import database from "../helpers/database.js";

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

        const {id} = req.params; // get route params

        // check if valid ObjectId for mongodb params
        if (typeof id !== 'string' || id.length !== 24) {
            return res.status(422).json({
                id: 'ObjectId format mismatch',
            });
        }

    }

    next();
}]