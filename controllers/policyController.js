// External Dependancies
const boom = require("boom");

// Get Data Models
const { Policy } = require("../models/index");

// Get all policies
exports.getFiles = async (req, reply) => {
  try {
    const policies = await Policy.findAll();
    return policies;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single policy by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return Policy.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new policy
exports.addFile = async (req, reply) => {
  const { insuranceUserId, no, assistants, startDate, expiriyDate } = req.body;
  try {
    return Policy.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing policy
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    Policy.update(req.body, {
      where: { id: id },
    });
    return Policy;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a policy
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const policy = await Policy.destroy({
      where: { id },
    });
    return policy;
  } catch (err) {
    throw boom.boomify(err);
  }
};
