const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const invoicesRoutes = require("./routes/invoices");

mongoose
  .connect(
    "mongodb+srv://issa:Asmaa1997@cluster0.rbo0a.mongodb.net/invoice-app?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion MongoDB réussie !"))
  .catch(() => console.log("Connexion MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/invoices", invoicesRoutes);

module.exports = app;
