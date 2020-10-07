// Import our Controllers
const brandController = require("../controllers/brandController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const brandRoute = [
  {
    method: "GET",
    url: "/api/brands",
    handler: brandController.getFiles,
  },
  {
    method: "GET",
    url: "/api/brands/:id",
    handler: brandController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/brands",
    handler: brandController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/brands/:id",
    handler: brandController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/brands/:id",
    handler: brandController.deleteFile,
  },
];

module.exports = brandRoute;
