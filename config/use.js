import rateLimit from "express-rate-limit";
import errorhandler from "errorhandler";
import compression from 'compression';
import limiter from "./limiter.js";
import routing from "aka.routing";
import policy from "./policy.js";
import express from 'express';
import helmet from "helmet";
import multer from "multer";
import cors from "cors";

/** @optional middlewares */
// import nocache from "nocache";
// import expressSession from "express-session";
// import session from "./session.js";

export default [

    /** @optional
     |--------------------------------------------------------------------------
     | limiter.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware that manages the request limit time management
     |
     */
    rateLimit(limiter),

    /** @optional
     |--------------------------------------------------------------------------
     | session.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware that manages the user session and should be used before route
     | and static file management
     |
     */
    // expressSession(session),

    /** @optional
     |--------------------------------------------------------------------------
     | nocache.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware function that is used to remove cache from routes in application.
     |
     */
    // nocache(),

    /**
     |--------------------------------------------------------------------------
     | helmet.js middleware
     |--------------------------------------------------------------------------
     |
     | security middleware for Express.js that helps protect your web application
     | from several common attacks.
     */
    helmet(),

    /**
     |--------------------------------------------------------------------------
     | cors.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware to allow cross-origin requests from different domains
     |
     */
    cors(policy),

    /**
     |--------------------------------------------------------------------------
     | Express.js middleware
     |--------------------------------------------------------------------------
     |
     | Express.js middleware that manages the upload of files sent via a
     | multipart/form-data HTTP POST request.
     |
     */
    multer().none(),

    /**
     |--------------------------------------------------------------------------
     | json.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware function that is used to parse a request body in JSON format.
     |
     */
    express.json(),

    /**
     |--------------------------------------------------------------------------
     | urlencoded.js middleware
     |--------------------------------------------------------------------------
     |
     | Express.js middleware that parses incoming HTTP requests with the
     | application/x-www-form-urlencoded content type and transforms the
     | request body into a JavaScript object accessible via req.body.
     |
     */
    express.urlencoded({extended: true}),

    /**
     |--------------------------------------------------------------------------
     | compression.js middleware
     |--------------------------------------------------------------------------
     |
     | Express.js middleware that provides Gzip compression for HTTP responses.
     | In essence, this middleware compresses the body of HTTP responses before
     | they are sent to the client.
     */
    compression(),

    /**
     |--------------------------------------------------------------------------
     | Routing.js middleware
     |--------------------------------------------------------------------------
     |
     | middleware function that is used to parse all routes in application.
     |
     */
    routing(),

    /**
     |--------------------------------------------------------------------------
     | Error.js middleware
     |--------------------------------------------------------------------------
     |
     | Error handling middleware that helps you handle global application errors.
     |
     */
    errorhandler(),

    /** @optional
     |--------------------------------------------------------------------------
     | static.js middleware
     |--------------------------------------------------------------------------
     |
     | serve images, CSS files, and JavaScript files middleware.
     |
     */
    // express.static('public'),

]