const express = require("express");
const router = express.Router();

const invoicesController = require("../controllers/invoices");

router.get("/", invoicesController.getAllInvoices);
router.post("/send-data", invoicesController.createInvoice);
router.put("/update", invoicesController.modifyInvoice);
router.delete("/delete", invoicesController.deleteInvoice);

module.exports = router;
