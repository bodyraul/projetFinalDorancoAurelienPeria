const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const uri = "mongodb+srv://aurelienPeria:fanta12356@cluster0.mwvztob.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(()=> console.log("connexion ok"))
.catch((erreur)=>console.log(erreur));

// const db = mongoose.connection;

// db.on("error",(erreur) =>console.log(erreur));
// db.once("open",()=> console.log("connexion ok"));

const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const messageRoute = require("./routes/messageRoute");
const adminRoute = require("./routes/admin");
const signalementRoute = require("./routes/signalementRoute");
const categorie = require("./routes/categorie");
app.use("/post",postRoute);
app.use("/user",userRoute);
app.use("/message",messageRoute);
app.use("/categorie",categorie);
app.use("/admin",adminRoute);
app.use("/signalement",signalementRoute);


const port = 5000;
app.listen(port, () => console.log("server ok "));
