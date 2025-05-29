import {app, ip} from "aka.providers"; // must init before all
import config from "./config/app.js";

/*
 |--------------------------------------------------------------------------
 | Start [aka.backend] application
 |--------------------------------------------------------------------------
 */
app.listen(config.port, () => {
  console.log(`🖥️ ${config.name} backend listening on http://127.0.0.1:${config.port}`)
  console.log(`🌐 ${config.name} backend listening on http://${ip.local}:${config.port}`)
})

/*
 |--------------------------------------------------------------------------
 | Avoid [aka.backend] application exiting on error
 |--------------------------------------------------------------------------
 */
process.on('uncaughtException', (err) => {
  console.log(`❌ ${config.name} exception: `, err);
});