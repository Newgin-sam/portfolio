const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (values) => {

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: "newginsam@gmail.com",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }

        });

        const options = {
            from: "newginsam@gmail.com",
            to: values.email,
            subject: `${values.name} : ${values.subject}`,
            text: values.message
        };

        transporter.sendMail(options, function (err, info) {
            if (err) {
                console.log(err);
                return false;
            }
            return true;
        })

    } catch (e) {
        return e;
    }

}

module.exports = sendMail;