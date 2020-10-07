// Import our Controllers
const towTruckCalculationController = require("../controllers/towTruckCalculationController");

// Import Swagger documentation
// const documentation = require('./documentation/insuranceUserApi')

const towTruckCalculationRoute = [
  {
    method: "GET",
    url: "/api/towTruckCalculations",
    handler: towTruckCalculationController.getFiles,
  },
  {
    method: "GET",
    url: "/api/towTruckCalculations/:id",
    handler: towTruckCalculationController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/towTruckCalculations",
    handler: towTruckCalculationController.addFile,
    // schema: documentation.addInsuranceUserSchema
  },
  {
    method: "PUT",
    url: "/api/towTruckCalculations/:id",
    handler: towTruckCalculationController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/towTruckCalculations/:id",
    handler: towTruckCalculationController.deleteFile,
  },
];

module.exports = towTruckCalculationRoute;
