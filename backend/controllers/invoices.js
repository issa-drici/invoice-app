const Invoice = require("../models/Invoice");

exports.getAllInvoices = (req, res, next) => {
  Invoice.find()
    .then((invoices) => {
      res.status(200).json(invoices);
    })
    .catch((err) => res.status(400).json({ error }));
};

exports.createInvoice = (req, res, next) => {
  const invoice = new Invoice({
    orderNo: req.body.orderNo,
    billFrom: {
      adress: req.body.billFrom.adress,
      city: req.body.billFrom.city,
      postCode: req.body.billFrom.postCode,
      country: req.body.billFrom.country,
    },
    billTo: {
      name: req.body.billTo.name,
      email: req.body.billTo.email,
      adress: req.body.billTo.adress,
      city: req.body.billTo.city,
      postCode: req.body.billTo.postCode,
      country: req.body.billTo.country,
      invoiceDate: req.body.billTo.invoiceDate,
      dueDate: req.body.billTo.dueDate,
    },
    description: req.body.description,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
    status: req.body.status,
  });
  invoice
    .save()
    .then((data) => {
      console.log(data);
      res.send(" success");
    })
    .catch((err) => console.log(err));
};

exports.deleteInvoice = (req, res, next) => {
  Invoice.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send("deleted");
    })
    .catch((err) => console.log(err));
};

exports.modifyInvoice = (req, res, next) => {
  Invoice.findByIdAndUpdate(req.body.id, {
    orderNo: req.body.orderNo,
    billFrom: {
      adress: req.body.billFrom.adress,
      city: req.body.billFrom.city,
      postCode: req.body.billFrom.postCode,
      country: req.body.billFrom.country,
    },
    billTo: {
      name: req.body.billTo.name,
      email: req.body.billTo.email,
      adress: req.body.billTo.adress,
      city: req.body.billTo.city,
      postCode: req.body.billTo.postCode,
      country: req.body.billTo.country,
      invoiceDate: req.body.billTo.invoiceDate,
      dueDate: req.body.billTo.dueDate,
    },
    description: req.body.description,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
    status: req.body.status,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};
