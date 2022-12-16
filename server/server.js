const express = require("express");
const router = express.Router();
//const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require('nodemailer');

dotenv.config();
const app = express();
//{ origin: `http://localhost:5000/` }
app.use(cors());
app.use(express.json());
app.use("/",router)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('app is listening at');
  console.log(`http://localhost:${port}`);
}); 

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'dvsdk671@gmail.com',
      pass: 'mebfoxzqegdrxnbx',
    },
  });
  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error); // Log any errors that occur
    } else {
      console.log(`Email sent: ${info.response}`); // Log a success message
    }
  });
};

const emailSender = ({ name, email, phone, message }) => {
  const options = {
    from: `portfolio ${process.env.EMAIL}`,
    to: 'dvs.dinesh2001@gmail.com',
    subject: 'A Submission from portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  Email(options);
};

router.post("/send", async (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    emailSender({ name, email, phone, message });
  try {
    res.json({ msg: "You have submitted succesfully" });

  } catch (error) {
    res.status(404).json({ msg: "Error" });
  }
  
})

