// External Dependancies
const boom = require("boom");

// Get Data Models
const { Model, Brand } = require("../models/index");

// Get all models
exports.getFiles = async (req, reply) => {
  try {
    const models = await Model.findAll({
      include: [
        {
          model: Brand,
          as: "brand",
        },
      ],
    });
    return models;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single model by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return Model.findByPk(req.params.id, {
      include: [
        {
          model: Brand,
          as: "brand",
        },
      ],
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new model
exports.addFile = async (req, reply) => {
  const { brandId, name } = req.body;
  try {
    return Model.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing model
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    Model.update(req.body, {
      where: { id: id },
    });
    return Model;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a model
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const model = await Model.destroy(
      {
        where: { id },
      },
      {
        include: [
          {
            model: Brand,
            as: "brand",
          },
        ],
      }
    );
    return model;
  } catch (err) {
    throw boom.boomify(err);
  }
};
