const express = require('express');
// const bodyParser = require('body-parser');
//const nodemailer = require("nodemailer");
require('dotenv').config();
// const result = dotenv.config()
// console.log(dotenv.config())
// const mail = require("./nodemailer.js");
const app = express();
const PORT = process.env.PORT || 3001;
 
// if (result.error) {
//   throw result.error
// }
 
// console.log(result.parsed)


// routes
// app.use(mail);
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serving up static assets (usually on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("reactportfolio/build"))
};

// app.post('/api/form', (req, res) => {
//     console.log(req.body)
//     console.log( mail)
//     mail(req.body)
// });

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})