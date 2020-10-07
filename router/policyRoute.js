// Import our Controllers
const policyController = require("../controllers/policyController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const policyRoute = [
  {
    method: "GET",
    url: "/api/policies",
    handler: policyController.getFiles,
  },
  {
    method: "GET",
    url: "/api/policies/:id",
    handler: policyController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/policies",
    handler: policyController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/policies/:id",
    handler: policyController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/policies/:id",
    handler: policyController.deleteFile,
  },
];

module.exports = policyRoute;
