export default {

    /**
     |--------------------------------------------------------------------------
     | Application origin
     |--------------------------------------------------------------------------
     |
     | This value is part of your application. This value is used when the framework
     | needs to place this value in any other location as required
     | by the application or its packages.
     |
     */
    resave: false, // don't save session if unmodified


    /**
     |--------------------------------------------------------------------------
     | Application saveUninitialized
     |--------------------------------------------------------------------------
     |
     | This value is part of your application. This value is used when the framework
     | needs to place this value in any other location as required
     | by the application or its packages.
     |
     */
    saveUninitialized: false, // don't create session until something stored


    /**
     |--------------------------------------------------------------------------
     | Application origin
     |--------------------------------------------------------------------------
     |
     | This value is part of your application. This value is used when the framework
     | needs to place this value in any other location as required
     | by the application or its packages.
     |
     */
    secret: process.env.APP_KEY || 'my-very-secret'
}