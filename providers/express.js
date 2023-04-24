import express from 'express';
import dotenv from 'dotenv';
import middleware from "../config/middleware.js";

// load env configs
dotenv.config();

// init express application
const app = express()

// Disable X-Powered-By header
app.disable('x-powered-by');

// load dynamic middlewares
Object.keys(middleware).map(index => app.use(middleware[index]))

export {
    app, // export app for environment
    express // export express for environment
};