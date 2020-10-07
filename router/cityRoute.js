// Import our Controllers
const cityController = require("../controllers/cityController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const cityRoute = [
  {
    method: "GET",
    url: "/api/cities",
    handler: cityController.getFiles,
  },
  {
    method: "GET",
    url: "/api/cities/:id",
    handler: cityController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/cities",
    handler: cityController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/cities/:id",
    handler: cityController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/cities/:id",
    handler: cityController.deleteFile,
  },
];

module.exports = cityRoute;
