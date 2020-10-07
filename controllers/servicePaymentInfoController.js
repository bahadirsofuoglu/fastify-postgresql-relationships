// External Dependancies
const boom = require("boom");

// Get Data Models
const { ServicePaymentInfo } = require("../models/index");

// Get all servicePaymentInfos
exports.getFiles = async (req, reply) => {
  try {
    const servicePaymentInfos = await ServicePaymentInfo.findAll();
    return servicePaymentInfos;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single servicePaymentInfo by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return ServicePaymentInfo.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new servicePaymentInfo
exports.addFile = async (req, reply) => {
  const {
    name,
    paymentType,
    appliedProcess,
    cancel,
    overLimit,
    note,
  } = req.body;
  try {
    return ServicePaymentInfo.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing servicePaymentInfo
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    ServicePaymentInfo.update(req.body, {
      where: { id: id },
    });
    return ServicePaymentInfo;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a servicePaymentInfo
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const servicePaymentInfo = await ServicePaymentInfo.destroy({
      where: { id },
    });
    return servicePaymentInfo;
  } catch (err) {
    throw boom.boomify(err);
  }
};
