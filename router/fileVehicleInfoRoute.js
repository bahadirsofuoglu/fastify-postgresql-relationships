// Import our Controllers
const fileVehicleInfoController = require("../controllers/fileVehicleInfoController");

// Import Swagger documentation
// const documentation = require('./documentation/fileVehicleInfoApi')

const fileVehicleInfoRoute = [
  {
    method: "GET",
    url: "/api/fileVehicleInfos",
    handler: fileVehicleInfoController.getFiles,
  },
  {
    method: "GET",
    url: "/api/fileVehicleInfos/:id",
    handler: fileVehicleInfoController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/fileVehicleInfos",
    handler: fileVehicleInfoController.addFile,
    // schema: documentation.addFileVehicleInfoSchema
  },
  {
    method: "PUT",
    url: "/api/fileVehicleInfos/:id",
    handler: fileVehicleInfoController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/fileVehicleInfos/:id",
    handler: fileVehicleInfoController.deleteFile,
  },
];

module.exports = fileVehicleInfoRoute;
