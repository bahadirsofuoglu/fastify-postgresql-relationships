// External Dependancies
const boom = require("boom");

// Get Data Models
const { InsuranceUser, Policy, City, County } = require("../models/index");

// Get all insuranceUsers
exports.getFiles = async (req, reply) => {
  try {
    const insuranceUsers = await InsuranceUser.findAll({
      include: [
        {
          model: Policy,
          as: "policies",
        },
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
    return insuranceUsers;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single insuranceUser by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return InsuranceUser.findByPk(req.params.id, {
      include: [
        {
          model: Policy,
          as: "policies",
        },
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

// Add a new insuranceUser
exports.addFile = async (req, reply) => {
  const {
    countyId,
    firstname,
    lastname,
    address,
    identificationNumber,
    taxNumber,
    mobilePhoneNumber,
    workPhoneNumber,
    homePhoneNumber,
  } = req.body;
  try {
    return InsuranceUser.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing insuranceUser
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    InsuranceUser.update(req.body, {
      where: { id: id },
    });
    return InsuranceUser;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a insuranceUser
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const insuranceUser = await InsuranceUser.destroy(
      {
        where: { id },
      },
      {
        include: [
          {
            model: Policy,
            as: "policies",
          },
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
    return insuranceUser;
  } catch (err) {
    throw boom.boomify(err);
  }
};
