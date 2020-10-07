// Import our Controllers
const insuranceUserController = require("../controllers/insuranceUserController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const insuranceUserRoute = [
  {
    method: "GET",
    url: "/api/insuranceUsers",
    handler: insuranceUserController.getFiles,
  },
  {
    method: "GET",
    url: "/api/insuranceUsers/:id",
    handler: insuranceUserController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/insuranceUsers",
    handler: insuranceUserController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/insuranceUsers/:id",
    handler: insuranceUserController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/insuranceUsers/:id",
    handler: insuranceUserController.deleteFile,
  },
];

module.exports = insuranceUserRoute;
