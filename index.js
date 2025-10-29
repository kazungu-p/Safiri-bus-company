import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
    
});
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res)=>{
    res.render("index.ejs");
});
app.get("/about", (req, res)=>{
    res.render("about.ejs")
});
app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
});

app.post("/contact", async (req, res)=>{
    const {name, countryCode, number, email, subject, message} = req.body;

    const mailOptions = {
        from:   email,
        to: "patrickkazungu.me7@gmail.com",
        subject:`New Contact from ${name}: ${subject}`,
        text: `
            Name:   ${name}
            Phone:  +${countryCode}${number}
            Email:  ${email}
            
            Message:
            ${message}
        `    
    };
    try{
        await transporter.sendMail(mailOptions);
        res.send("Your Message has been sent successfully!")
    }catch(error){
        console.error("Error sending email:", error);
        res.status(500).send("Something went wrong. Please try again Later")
    }
});

