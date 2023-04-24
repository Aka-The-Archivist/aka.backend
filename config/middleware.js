import {express} from "../providers/express.js";
import compression from 'compression';
import routing from "aka.routing";
import policy from "./policy.js";
import helmet from "helmet";
import cors from "cors";

export default {

    /**
     |--------------------------------------------------------------------------
     | Express.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware function that is used to parse a request body in JSON format.
     |
     */
    json: express.json(),

    /**
     |--------------------------------------------------------------------------
     | Express.js middleware
     |--------------------------------------------------------------------------
     |
     | Express.js middleware that parses incoming HTTP requests with the
     | application/x-www-form-urlencoded content type and transforms the
     | request body into a JavaScript object accessible via req.body.
     |
     */
    urlencoded: express.urlencoded({extended: true}),

    /**
     |--------------------------------------------------------------------------
     | Custom.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware function that is used to parse all routes in application.
     |
     */
    routing: routing(),

    /**
     |--------------------------------------------------------------------------
     | cors.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware to allow cross-origin requests from different domains
     |
     */
    cors: cors(policy),

    /**
     |--------------------------------------------------------------------------
     | helmet.js middleware
     |--------------------------------------------------------------------------
     |
     | security middleware for Express.js that helps protect your web application
     | from several common attacks.
     */
    helmet: helmet(),

    /**
     |--------------------------------------------------------------------------
     | compression.js middleware
     |--------------------------------------------------------------------------
     |
     | Express.js middleware that provides Gzip compression for HTTP responses.
     | In essence, this middleware compresses the body of HTTP responses before
     | they are sent to the client.
     */
    compression: compression()

}