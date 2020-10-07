// Import our Controllers
const serviceController = require("../controllers/serviceController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const serviceRoute = [
  {
    method: "GET",
    url: "/api/services",
    handler: serviceController.getFiles,
  },
  {
    method: "GET",
    url: "/api/services/:id",
    handler: serviceController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/services",
    handler: serviceController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/services/:id",
    handler: serviceController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/services/:id",
    handler: serviceController.deleteFile,
  },
];

module.exports = serviceRoute;
