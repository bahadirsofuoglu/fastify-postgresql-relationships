// Import our Controllers
const fileCustomerController = require("../controllers/fileCustomerController");

const fileCustomerRoute = [
  {
    method: "GET",
    url: "/api/fileCustomers",
    handler: fileCustomerController.getFiles,
  },
  {
    method: "GET",
    url: "/api/fileCustomers/:id",
    handler: fileCustomerController.getSingleFile,
  },
  {
    method: "POST",
    url: "/api/fileCustomers",
    handler: fileCustomerController.addFile,
    // schema: documentation.addFileCustomerSchema
  },
  {
    method: "PUT",
    url: "/api/fileCustomers/:id",
    handler: fileCustomerController.updateFile,
  },
  {
    method: "DELETE",
    url: "/api/fileCustomers/:id",
    handler: fileCustomerController.deleteFile,
  },
];

module.exports = fileCustomerRoute;
