// Import our Controllers
const serviceSmsMessageController = require("../controllers/serviceSmsMessageController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const serviceSmsMessageRoute = [
  {
    method: "GET",
    url: "/api/serviceSmsMessages",
    handler: serviceSmsMessageController.getFiles,
  },
  {
    method: "GET",
    url: "/api/serviceSmsMessages/:id",
    handler: serviceSmsMessageController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/serviceSmsMessages",
    handler: serviceSmsMessageController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/serviceSmsMessages/:id",
    handler: serviceSmsMessageController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/serviceSmsMessages/:id",
    handler: serviceSmsMessageController.deleteFile,
  },
];

module.exports = serviceSmsMessageRoute;
