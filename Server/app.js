const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Invoice')

app.use(bodyParser.json())

const Invoice = mongoose.model("invoice")

const mongoUri = "mongodb+srv://cnq:1jGRCThqoyZIBVC8@cluster0.rbo0a.mongodb.net/invoice-app"

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB")
})

mongoose.connection.on("error", (err) => {
  console.log("error", err)
})

app.get('/', (req, res) => {
  Invoice.find({}).then( data => {
    res.send(data)
  }) .catch( err => console.log(err))
})

app.post('/send-data', (req,res) => {
  const invoice = new Invoice({
    orderNo: req.body.orderNo,
    billFrom: {
      adress: req.body.billFrom.adress,
      city: req.body.billFrom.city,
      postCode: req.body.billFrom.postCode,
      country: req.body.billFrom.country
    },
    billTo: {
      name: req.body.billTo.name,
      email: req.body.billTo.email,
      adress: req.body.billTo.adress,
      city: req.body.billTo.city,
      postCode: req.body.billTo.postCode,
      country: req.body.billTo.country,
      invoiceDate: req.body.billTo.invoiceDate,
      dueDate: req.body.billTo.dueDate
    },
    description: req.body.description,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
    status: req.body.status
  })
  invoice.save()
    .then( data => {
      console.log(data)
      res.send(" success")
    }).catch( err => console.log(err))
})

app.post('/delete', (req,res) => {
   Invoice.findByIdAndRemove(req.body.id)
    .then(data => {
      console.log(data)
      res.send("deleted")
    })
    .catch(err => console.log(err))
})

app.post('/update', (req,res) => {
  Invoice.findByIdAndUpdate(req.body.id, {
    orderNo: req.body.orderNo,
    billFrom: {
      adress: req.body.billFrom.adress,
      city: req.body.billFrom.city,
      postCode: req.body.billFrom.postCode,
      country: req.body.billFrom.country
    },
    billTo: {
      name: req.body.billTo.name,
      email: req.body.billTo.email,
      adress: req.body.billTo.adress,
      city: req.body.billTo.city,
      postCode: req.body.billTo.postCode,
      country: req.body.billTo.country,
      invoiceDate: req.body.billTo.invoiceDate,
      dueDate: req.body.billTo.dueDate
    },
    description: req.body.description,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
    status: req.body.status
  })
    .then(data => {
      console.log(data)
      res.send(data)
    })
    .catch(err => console.log(err))
})

app.listen(19002, () => {
  console.log('server running')
})