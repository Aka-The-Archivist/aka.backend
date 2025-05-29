import {app, ip} from "aka.providers"; // must init before all
import config from "./config/app.js";

/*
 |--------------------------------------------------------------------------
 | Start [aka.backend] application
 |--------------------------------------------------------------------------
 */
app.listen(config.port, () => {
    console.log(`${config.name} backend listening on local port http://${ip.local}:${config.port}`)
    console.log(`${config.name} backend listening on network port http://${ip.network}:${config.port}`)
})

/*
 |--------------------------------------------------------------------------
 | Avoid [aka.backend] application exiting on error
 |--------------------------------------------------------------------------
 */
process.on('uncaughtException', (err) => {
    console.log(`${config.name} exception: `, err);
});