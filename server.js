const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

//Server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Servidor em execução"));


const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if(error) {
        console.log("Erro na verificação do transporte", error);
    }else{
        console.log("Pronto pra enviar e-mails");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "theuswork2207@gmail.com",
        subject: "Contact Form Submission - Portfólio",
        html:`<p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
              <p>Message: ${message}</p>`
    }

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error("Erro ao enviar email", error);
            res.status(500).json({message: "Erro ao enviar a mensagem", error});
        } else {
            console.log("Email envido:", info.response);
            res.status(200).json({message:"Message enviada com sucessso"});
        }
    });
    
});

    
