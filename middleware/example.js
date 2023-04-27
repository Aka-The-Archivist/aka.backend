
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
export default () => (req, res, next) => {
    // if (req.session.user) {
    //     next();
    // } else {
    //     req.session.error = 'Access denied!';
    //     res.redirect('/login');
    // }

    console.log(req.session)

    next();
}