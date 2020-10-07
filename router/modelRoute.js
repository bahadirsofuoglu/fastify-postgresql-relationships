// Import our Controllers
const modelController = require("../controllers/modelController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const modelRoute = [
  {
    method: "GET",
    url: "/api/models",
    handler: modelController.getFiles,
  },
  {
    method: "GET",
    url: "/api/models/:id",
    handler: modelController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/models",
    handler: modelController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/models/:id",
    handler: modelController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/models/:id",
    handler: modelController.deleteFile,
  },
];

module.exports = modelRoute;
