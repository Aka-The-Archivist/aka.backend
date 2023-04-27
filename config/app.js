export default {

    /**
     |--------------------------------------------------------------------------
     | Application Name
     |--------------------------------------------------------------------------
     |
     | This value is part of your application. This value is used when the framework
     | needs to place this value in any other location as required
     | by the application or its packages.
     |
     */
    name: process.env.APP_NAME || 'aka backend',


    /**
     |--------------------------------------------------------------------------
     | Application Port
     |--------------------------------------------------------------------------
     |
     | This value is part of your application. This value is used when the framework
     | needs to place this value in any other location as required
     | by the application or its packages.
     |
     */
    port: process.env.APP_PORT || 3000,


    /**
     |--------------------------------------------------------------------------
     | Application Env
     |--------------------------------------------------------------------------
     |
     | This value is part of your application. This value is used when the framework
     | needs to place this value in any other location as required
     | by the application or its packages.
     |
     */
    debug: process.env.APP_DEBUG || true,

}