// External Dependancies
const boom = require("boom");

// Get Data Models
const { FileIncidentInfo, County, City } = require("../models/index");

// Get all fileIncidentInfos
exports.getFiles = async (req, reply) => {
  try {
    const fileIncidentInfos = await FileIncidentInfo.findAll({
      include: [
        {
          model: County,
          as: "county",
          include: [
            {
              model: City,
              as: "city",
            },
          ],
        },
      ],
    });
    return fileIncidentInfos;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single fileIncidentInfo by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return FileIncidentInfo.findByPk(req.params.id, {
      include: [
        {
          model: County,
          as: "county",
          include: [
            {
              model: City,
              as: "city",
            },
          ],
        },
      ],
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new fileIncidentInfo
exports.addFile = async (req, reply) => {
  const { countyId, dateTime, description, address, addressDetail } = req.body;
  try {
    return FileIncidentInfo.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing fileIncidentInfo
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    FileIncidentInfo.update(req.body, {
      where: { id: id },
    });
    return FileIncidentInfo;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a fileIncidentInfo
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const fileIncidentInfo = await FileIncidentInfo.destroy(
      {
        where: { id },
      },
      {
        include: [
          {
            model: County,
            as: "county",
            include: [
              {
                model: City,
                as: "city",
              },
            ],
          },
        ],
      }
    );
    return fileIncidentInfo;
  } catch (err) {
    throw boom.boomify(err);
  }
};
