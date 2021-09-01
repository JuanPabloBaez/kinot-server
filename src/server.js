const express = require("express");
require("dotenv").config();
const cors = require("cors");
//const nodemailer = require("nodemailer");
require("./db");
const filmRouter = require("../routers/films");
//const contactRouter = require("../routers/contact");

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());




app.use("/api/films", filmRouter);
//app.use("/api/contact", contactRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

