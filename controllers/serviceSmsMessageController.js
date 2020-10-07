// External Dependancies
const boom = require("boom");

// Get Data Models
const { ServiceSmsMessage } = require("../models/index");

// Get all Services
exports.getFiles = async (req, reply) => {
  try {
    const serviceSmsMessage = await ServiceSmsMessage.findAll();
    return serviceSmsMessage;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single fileIncidentInfo by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return ServiceSmsMessage.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new fileIncidentInfo
exports.addFile = async (req, reply) => {
  const {
    serviceId,
    telephoneNumber,
    sendByNumber,
    smsSubject,
    smsText,
  } = req.body;
  try {
    return ServiceSmsMessage.create(req.body);
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
    const serviceSmsMessage = await ServiceSmsMessage.destroy({
      where: { id },
    });
    return serviceSmsMessage;
  } catch (err) {
    throw boom.boomify(err);
  }
};
