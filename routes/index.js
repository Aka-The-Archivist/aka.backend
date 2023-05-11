/**
 *
 * @param req
 * @param res
 */
export default function get(req, res) {
    res.json({
        message: "codesandbox:aka.backend | emails",
        usage: [
            "async   mail: POST    => /email/node | {...data}",
            "await   mail: POST    => /email/sendgrid | {...data}",
        ],
    });
}