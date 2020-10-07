// External Dependancies
const boom = require("boom");

// Get Data Models
const { FileSmsMessage } = require("../models/index");

// Get all Services
exports.getFiles = async (req, reply) => {
  try {
    const fileSmsMessage = await FileSmsMessage.findAll();
    return fileSmsMessage;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single fileIncidentInfo by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return FileSmsMessage.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new fileIncidentInfo
exports.addFile = async (req, reply) => {
  const {
    fileId,
    telephoneNumber,
    sendByNumber,
    smsSubject,
    smsText,
  } = req.body;
  try {
    return FileSmsMessage.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing fileIncidentInfo
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    Service.update(req.body, {
      where: { id: id },
    });
    return Service;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a fileIncidentInfo
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const fileSmsMessage = await FileSmsMessage.destroy({
      where: { id },
    });
    return fileSmsMessage;
  } catch (err) {
    throw boom.boomify(err);
  }
};
