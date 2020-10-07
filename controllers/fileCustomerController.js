// External Dependancies
const boom = require("boom");

// Get Data Models
const { FileCustomer } = require("../models/index");

// Get all fileCustomers
exports.getFiles = async (req, reply) => {
  try {
    const fileCustomers = await FileCustomer.findAll();
    return fileCustomers;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single fileCustomer by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return FileCustomer.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new fileCustomer
exports.addFile = async (req, reply) => {
  const { firstname, lastname, fullname, phoneNumber } = req.body;
  try {
    return FileCustomer.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing fileCustomer
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    FileCustomer.update(req.body, {
      where: { id: id },
    });
    return FileCustomer;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a fileCustomer
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const fileCustomer = await FileCustomer.destroy({
      where: { id },
    });
    return fileCustomer;
  } catch (err) {
    throw boom.boomify(err);
  }
};
