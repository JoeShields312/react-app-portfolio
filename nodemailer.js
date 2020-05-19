// UNDER CONSTRUCTION PUTAS

// "use strict";
// const nodemailer = require("nodemailer");
// require('dotenv').config();

// // async..await is not allowed in global scope, must use a wrapper
// module.exports = async function main({name, email, message}) {
//   // Generate test SMTP service account from ethereal.email
//   let testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         type: "oauth2",
//         user: process.env.EMAIL, // email you are using with nodemailer
//         pass: process.env.PASSWORD, // email password
//         REACT_APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
//         REACT_APP_CLIENT_SECRET:process.env.REACT_APP_CLIENT_SECRET,
//         REACT_APP_REFRESH_TOKEN: process.env.REACT_APP_REFRESH_TOKEN
//     },
//     tls:{
//        rejectUnauthorized:false 
//     }
//   })//.catch(err=>console.error("transport",err));

//   let info = await transporter.sendMail({
//     from: email, // sender address
//     to: process.env.RECEIVEDEMAIL, // list of receivers
//     subject: "New Email From Portfolio", // Subject line
//     text: `${name} from ${email} sent this:\n ${message}`, // plain text body
//     // html: `<b>${message}</b>` // html body
//   }).catch(err=>console.error("sendmail",err));;

// }

// //main().catch(console.error);
"use strict";
const router = require ("express").Router()
const nodemailer = require('nodemailer');
require('dotenv').config();

const auth = {
    type: 'oauth2',
    user: process.env.EMAIL,
    REACT_APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET:process.env.REACT_APP_CLIENT_SECRET,
    REACT_APP_REFRESH_TOKEN: process.env.REACT_APP_REFRESH_TOKEN
}