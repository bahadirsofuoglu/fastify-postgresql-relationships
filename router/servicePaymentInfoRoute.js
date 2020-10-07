// Import our Controllers
const servicePaymentInfoController = require("../controllers/servicePaymentInfoController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const servicePaymentInfoRoute = [
  {
    method: "GET",
    url: "/api/servicePaymentInfos",
    handler: servicePaymentInfoController.getFiles,
  },
  {
    method: "GET",
    url: "/api/servicePaymentInfos/:id",
    handler: servicePaymentInfoController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/servicePaymentInfos",
    handler: servicePaymentInfoController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/servicePaymentInfos/:id",
    handler: servicePaymentInfoController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/servicePaymentInfos/:id",
    handler: servicePaymentInfoController.deleteFile,
  },
];

module.exports = servicePaymentInfoRoute;
