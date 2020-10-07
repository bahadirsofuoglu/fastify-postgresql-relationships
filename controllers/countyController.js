// External Dependancies
const boom = require("boom");

// Get Data Models
const { County, City } = require("../models/index");

// Get all counties
exports.getFiles = async (req, reply) => {
  try {
    const counties = await County.findAll({
      include: [
        {
          model: City,
          as: "city",
        },
      ],
    });
    return counties;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single county by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return County.findByPk(req.params.id, {
      include: [
        {
          model: City,
          as: "city",
        },
      ],
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new county
exports.addFile = async (req, reply) => {
  const { cityId, name } = req.body;
  try {
    return County.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing county
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    County.update(req.body, {
      where: { id: id },
    });
    return County;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a county
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const county = await County.destroy(
      {
        where: { id },
      },
      {
        include: [
          {
            model: City,
            as: "city",
          },
        ],
      }
    );
    return county;
  } catch (err) {
    throw boom.boomify(err);
  }
};
