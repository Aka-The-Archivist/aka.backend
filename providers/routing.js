import fs from "fs";
import path from 'path';
import {fileURLToPath} from 'url';
import policy from "../config/policy.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 *
 * @param dir
 * @returns {unknown[]|*}
 */
function readdirSyncRecursive(dir) {
    return fs.statSync(dir).isDirectory()
        ? Array.prototype.concat(...fs.readdirSync(dir)
            .map(f => readdirSyncRecursive(path.join(dir, f))))
        : dir;
}

/**
 *
 * @param router
 * @returns {*}
 */
const routing = (router) => {

    // Carica automaticamente tutti i file di routing
    readdirSyncRecursive(
        path.join(__dirname, '..', 'routes')
    )
        .forEach(async (file, index, bag, routeEndpoint) => {

            // get path in file replace dir
            const routePath = path.relative(__dirname, file).replace(/\\/g, '/');

            const routeHandler = await import(routePath);

            // get path from split array
            routeEndpoint = routePath.split('.')[2];

            // replace slash if reverse
            routeEndpoint = routeEndpoint.replace(/\\/g, '/');

            // remove path routes
            routeEndpoint = routeEndpoint.replace('/routes', '');

            // replace index page
            routeEndpoint = routeEndpoint.replace('index', '');

            // replace page params [param] => :param
            routeEndpoint = routeEndpoint.replace('[', ':').replace(']', '');

            // trilling last slash
            routeEndpoint = routeEndpoint.replace(/\/([^\/]+)\/?$/, '/$1');

            // get method from handler
            const methods = Object.keys(routeHandler);

            // load all method exported
            methods.map(method => {

                if (
                    /** check if valid function */
                    typeof routeHandler[method] === 'function' &&

                    /** check if valid method in policy */
                    policy.methods.includes(method.toUpperCase())
                ) {

                    // dynamic routing for express
                    router[method](routeEndpoint, routeHandler[method]);
                }

            })

        });

    return router;
}

export default routing;