// Import our Controllers
const countyController = require("../controllers/countyController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const countyRoute = [
  {
    method: "GET",
    url: "/api/counties",
    handler: countyController.getFiles,
  },
  {
    method: "GET",
    url: "/api/counties/:id",
    handler: countyController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/counties",
    handler: countyController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/counties/:id",
    handler: countyController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/counties/:id",
    handler: countyController.deleteFile,
  },
];

module.exports = countyRoute;
