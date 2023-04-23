export default {

    /**
     |--------------------------------------------------------------------------
     | Application Name
     |--------------------------------------------------------------------------
     |
     | This value is the name of your application. This value is used when the
     | framework needs to place the application's name in a notification or
     | any other location as required by the application or its packages.
     |
     */

    name: process.env.APP_NAME || 'aka backend',


    /**
     |--------------------------------------------------------------------------
     | Application Port
     |--------------------------------------------------------------------------
     |
     | This value is the port of your application. This value is used when the
     | framework needs to place the application's port in
     | any other location as required by the application or its packages.
     |
     */

    port: process.env.APP_PORT || 3000,

}