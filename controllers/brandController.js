// External Dependancies
const boom = require("boom");

// Get Data Models
const { Brand } = require("../models/index");

// Get all brands
exports.getFiles = async (req, reply) => {
  try {
    const brands = await Brand.findAll();
    return brands;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single brand by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return Brand.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new brand
exports.addFile = async (req, reply) => {
  const { name } = req.body;
  try {
    return Brand.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing brand
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    Brand.update(req.body, {
      where: { id: id },
    });
    return Brand;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a brand
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const brand = await Brand.destroy({
      where: { id },
    });
    return brand;
  } catch (err) {
    throw boom.boomify(err);
  }
};
