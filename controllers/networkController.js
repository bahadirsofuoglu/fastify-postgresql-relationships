// External Dependancies
const boom = require("boom");

// Get Data Models
const { Network, City, County } = require("../models/index");

// Get all networks
exports.getFiles = async (req, reply) => {
  try {
    const networks = await Network.findAll({
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
    return networks;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single network by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return Network.findByPk(req.params.id, {
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

// Add a new network
exports.addFile = async (req, reply) => {
  const {
    countyId,
    name,
    location,
    telephoneNumber,
    homePhoneNumber,
    address,
    fullName,
    assistanceFullName,
    availabilityMobilApp,
    information,
    mapLink,
  } = req.body;
  try {
    return Network.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing network
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    Network.update(req.body, {
      where: { id: id },
    });
    return Network;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a network
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const network = await Network.destroy(
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
    return network;
  } catch (err) {
    throw boom.boomify(err);
  }
};
