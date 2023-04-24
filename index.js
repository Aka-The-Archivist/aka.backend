import config from "./config/app.js";
import {app} from "aka.providers";

/*
 |--------------------------------------------------------------------------
 | Start Express.js application
 |--------------------------------------------------------------------------
 */
app.listen(config.port, () => {
    console.log(`${config.name} backend listening on port http://127.0.0.1:${config.port}`)
})