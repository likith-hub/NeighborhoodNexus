import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const validCredentials = {
  email: "test@example.com",
  password: "123",
};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/home", (req,res) => {
  res.render("home");
});

app.get("/chat", (req,res) => {
  res.render("chat");
});

app.get("/notify", (req,res) => {
  res.render("notify");
});

app.get("/community", (req,res) => {
  res.render("community");
});

app.post("/submit",(req,res)=>{
  const { email, password } = req.body;

  if (email === validCredentials.email && password === validCredentials.password) {
    res.render("home");
  } else {
    res.redirect("/");
  }
  console.log(req.body);
});

app.post("/login",(req,res)=>{
  console.log("hello working");
  res.redirect("/");
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});