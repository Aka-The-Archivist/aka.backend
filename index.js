import {app} from "aka.providers"; // must init before all
import config from "./config/app.js";

/*
 |--------------------------------------------------------------------------
 | Start Express.js application
 |--------------------------------------------------------------------------
 */
app.listen(config.port, () => {
    console.log(`${config.name} backend listening on port http://127.0.0.1:${config.port}`)
})