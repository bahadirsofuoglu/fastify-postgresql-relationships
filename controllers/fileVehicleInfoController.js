// External Dependancies
const boom = require("boom");

// Get Data Models
const { FileVehicleInfo, Brand, Model } = require("../models/index");

// Get all fileVehicleInfos
exports.getFiles = async (req, reply) => {
  try {
    const fileVehicleInfos = await FileVehicleInfo.findAll({
      include: [
        {
          model: Model,
          as: "model",
          include: [
            {
              model: Brand,
              as: "brand",
            },
          ],
        },
      ],
    });
    return fileVehicleInfos;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single fileVehicleInfo by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return FileVehicleInfo.findByPk(req.params.id, {
      include: [
        {
          model: Model,
          as: "model",
          include: [
            {
              model: Brand,
              as: "brand",
            },
          ],
        },
      ],
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new fileVehicleInfo
exports.addFile = async (req, reply) => {
  const { modelId, plateNumber, modelYear, chasisNo, motorNo } = req.body;
  try {
    return FileVehicleInfo.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing fileVehicleInfo
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    FileVehicleInfo.update(req.body, {
      where: { id: id },
    });
    return FileVehicleInfo;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a fileVehicleInfo
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const fileVehicleInfo = await FileVehicleInfo.destroy(
      {
        where: { id },
      },
      {
        include: [
          {
            model: Model,
            as: "model",
            include: [
              {
                model: Brand,
                as: "brand",
              },
            ],
          },
        ],
      }
    );
    return fileVehicleInfo;
  } catch (err) {
    throw boom.boomify(err);
  }
};
