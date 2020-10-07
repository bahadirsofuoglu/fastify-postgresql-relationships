// Import our Controllers
const networkController = require("../controllers/networkController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const networkRoute = [
  {
    method: "GET",
    url: "/api/networks",
    handler: networkController.getFiles,
  },
  {
    method: "GET",
    url: "/api/networks/:id",
    handler: networkController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/networks",
    handler: networkController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/networks/:id",
    handler: networkController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/networks/:id",
    handler: networkController.deleteFile,
  },
];

module.exports = networkRoute;
