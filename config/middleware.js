import errorhandler from "errorhandler";
import compression from 'compression';
import routing from "aka.routing";
import policy from "./policy.js";
import express from 'express';
import helmet from "helmet";
import multer from "multer";
import cors from "cors";
import nocache from "nocache";

export default {

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
     | cors.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware to allow cross-origin requests from different domains
     |
     */
    cors: cors(policy),

    /**
     |--------------------------------------------------------------------------
     | compression.js middleware
     |--------------------------------------------------------------------------
     |
     | Express.js middleware that provides Gzip compression for HTTP responses.
     | In essence, this middleware compresses the body of HTTP responses before
     | they are sent to the client.
     */
    compression: compression(),

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
     | Express.js middleware
     |--------------------------------------------------------------------------
     |
     | Express.js middleware that manages the upload of files sent via a
     | multipart/form-data HTTP POST request.
     |
     */
    multer: multer().none(),

    /**
     |--------------------------------------------------------------------------
     | nocache.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware function that is used to remove cache from routes in application.
     |
     */
    nocache: nocache(),

    /**
     |--------------------------------------------------------------------------
     | Routing.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware function that is used to parse all routes in application.
     |
     */
    routing: routing(),

    /**
     |--------------------------------------------------------------------------
     | Routing.js middleware
     |--------------------------------------------------------------------------
     |
     | Error handling middleware that helps you handle global application errors.
     |
     */
    error: errorhandler(),

}