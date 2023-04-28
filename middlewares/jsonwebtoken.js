import jwt from "jsonwebtoken";

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

// auth user path only middleware
export default ["/user", (req, res, next) => {

    // middleware function for authentication
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // abort if not authenticate
    if (token == null)
        return res.status(401).json({
            message: "Unauthorized",
        });

    // use jsonwebtoken in {req}
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        // abort if not authenticate
        if (err !== null)
            return res.status(422).json({
                message: "Unauthorized",
            });

        req.user = user;

        next() // return request ok
    });

}];
