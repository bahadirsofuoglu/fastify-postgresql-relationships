// Import our Controllers
const fileSmsMessageController = require("../controllers/fileSmsMessageController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const fileSmsMessageRoute = [
  {
    method: "GET",
    url: "/api/fileSmsMessages",
    handler: fileSmsMessageController.getFiles,
  },
  {
    method: "GET",
    url: "/api/fileSmsMessages/:id",
    handler: fileSmsMessageController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/fileSmsMessages",
    handler: fileSmsMessageController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/fileSmsMessages/:id",
    handler: fileSmsMessageController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/fileSmsMessages/:id",
    handler: fileSmsMessageController.deleteFile,
  },
];

module.exports = fileSmsMessageRoute;
