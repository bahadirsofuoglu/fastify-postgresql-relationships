// Import our Controllers
const fileIncidentInfoController = require("../controllers/fileIncidentInfoController");

// Import Swagger documentation
// const documentation = require('./documentation/fileIncedentInfoApi')

const fileIncidentInfoRoute = [
  {
    method: "GET",
    url: "/api/fileIncidentInfos",
    handler: fileIncidentInfoController.getFiles,
  },
  {
    method: "GET",
    url: "/api/fileIncidentInfos/:id",
    handler: fileIncidentInfoController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/fileIncidentInfos",
    handler: fileIncidentInfoController.addFile,
    // schema: documentation.addFileIncedentInfoSchema
  },
  {
    method: "PUT",
    url: "/api/fileIncidentInfos/:id",
    handler: fileIncidentInfoController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/fileIncidentInfos/:id",
    handler: fileIncidentInfoController.deleteFile,
  },
];

module.exports = fileIncidentInfoRoute;
