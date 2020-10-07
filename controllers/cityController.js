// External Dependancies
const boom = require("boom");

// Get Data Models
const { City } = require("../models/index");

// Get all cities
exports.getFiles = async (req, reply) => {
  try {
    const cities = await City.findAll();
    return cities;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single city by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return City.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new city
exports.addFile = async (req, reply) => {
  const { name } = req.body;
  try {
    return City.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing city
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    City.update(req.body, {
      where: { id: id },
    });
    return City;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a city
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const city = await City.destroy({
      where: { id },
    });
    return city;
  } catch (err) {
    throw boom.boomify(err);
  }
};
