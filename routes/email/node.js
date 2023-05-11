import {NodeMailer} from "aka.emails";

/**
 *
 * @param req
 * @param res
 */
export default async function post(req, res) {

    try {

        // generate random code
        const code = Math.floor(Math.random() * 900000000) + 100000000;

        const {email} = req.body;

        if (!email) {
            return res.status(422).json({
                email: 'required'
            })
        }

        // create mail instance
        const mail = new NodeMailer(email);

        // set sendgrid from address
        mail.from('no-reply@example.com')

        // set subject mail
        mail.subject(`🔐 Confirm code to continue authentication`);

        // send async or await email with template
        await mail.send('example.code', {code}).then((message) =>
            console.log(message)
        );

        res.sendStatus(200)

    } catch (e) {

        console.log(e)
        res.status(400).end()
    }

}