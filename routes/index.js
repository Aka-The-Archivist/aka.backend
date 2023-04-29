/**
 *
 * @param req
 * @param res
 */
export default function get(req, res) {
    res.json({
        message: "codesandbox:aka.backend | mongodb",
        usage: [
            "all    user: GET     => /users",
            "make   user: POST    => /users/create | {...data}",
            "read   user: GET     => /users/[id] | {...params}",
            "update user: PATCH   => /users/[id]/update | {...params,...data}",
            "remove user: DELETE  => /users/[id]/delete | {...params,...data}",
        ],
    });
}