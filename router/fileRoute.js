// Import our Controllers
const fileController = require("../controllers/fileController");

const fileRoute = [
  {
    method: "GET",
    url: "/api/files",
    handler: fileController.getFiles,
  },
  {
    method: "GET",
    url: "/api/files/:id",
    handler: fileController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/files",
    handler: fileController.addFile,
    // schema: documentation.addFileSchema
  },
  {
    method: "PUT",
    url: "/api/files/:id",
    handler: fileController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/files/:id",
    handler: fileController.deleteFile,
  },
];

module.exports = fileRoute;
