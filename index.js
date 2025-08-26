import express, { urlencoded } from "express";

const app = express();
const port = 3000;

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
app.get("/join", (req, res)=>{
    res.render("join.ejs");
});

app.post("/contact", (req, res)=>{
    const {name, countryCode, number, email, subject, message} = req.body;
    console.log("Form Submission: ", req.body);
    res.send("Thank you! Your message has been received.")
});

