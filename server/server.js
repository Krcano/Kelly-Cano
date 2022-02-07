require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

const OAuth2 = google.auth.OAuth2;

const oAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const accessToken = new Promise((resolve, reject) => {
  oAuth2Client.getAccessToken((err, token) => {
    if (err) {
      reject("Failed to create access token");
    }
    resolve(token);
  });
});

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASS,
    accessToken,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
// });
// IF USING OAUTH2 CHANGE CONACTEMAIL TO TRANSPORT
transport.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const sendMail = (message) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(message, (error, info) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(info)
      ;
    });
  });
};
// USE IN CONJUCTION WITH OAUTH 2
router.post("/contact", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mailOptions = {
      from: name,
      to: "krcano2001@gmail.com",
      subject: "Reaching out from Portfolio",
      text: `You recieved a message from ${name} on your Portfolio saying: ${message}. Get in touch at ${email}`,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    await sendMail(mailOptions);
   
  } catch (err) {
    console.log(err);
  }
});

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: "krcano2001@gmail.com",
//     subject: "Reaching out from Portfolio",
//     text: `You recieved a message from ${name} on your Portfolio saying: ${message}. Get in touch at ${email}`,
//     html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });

app.listen(5000, () => console.log("Server Running"));
