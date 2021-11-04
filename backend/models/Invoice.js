const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
  orderNo: String,
  billFrom: {
    adress: String,
    city: String,
    postCode: String,
    country: String,
  },
  billTo: {
    name: String,
    email: String,
    adress: String,
    city: String,
    postCode: String,
    country: String,
    invoiceDate: String,
    dueDate: String,
  },
  description: String,
  items: [
    {
      key: String,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: Number,
  status: String,
});

module.exports = mongoose.model("invoice", invoiceSchema);
