// External Dependancies
const boom = require("boom");

// Get Data Models
const {
  Service,
  Network,
  ServicePaymentInfo,
  TowTruckCalculation,
  ServiceSmsMessage,
} = require("../models/index");

// Get all Services
exports.getFiles = async (req, reply) => {
  try {
    const Services = await Service.findAll({
      include: [
        {
          model: Network,
          as: "network",

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
        },

        {
          model: ServicePaymentInfo,
          as: "servicePaymentInfo",
        },
        {
          model: TowTruckCalculation,
          as: "towTruckCalculation",
        },
        {
          model: ServiceSmsMessage,
          as: "serviceSmsMessages",
        },
      ],
    });
    return Services;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single fileIncidentInfo by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return Service.findByPk(req.params.id, {
      include: [
        {
          model: Network,
          as: "network",
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
        },
        {
          model: ServicePaymentInfo,
          as: "servicePaymentInfo",
        },
        {
          model: TowTruckCalculation,
          as: "towTruckCalculation",
        },
        {
          model: ServiceSmsMessage,
          as: "serviceSmsMessages",
        },
      ],
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new fileIncidentInfo
exports.addFile = async (req, reply) => {
  const {
    fileId,
    networkId,
    servicePaymentInfoId,
    towTruckCalculationId,
  } = req.body;
  try {
    return Service.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing fileIncidentInfo
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    Service.update(req.body, {
      where: { id: id },
    });
    return Service;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a fileIncidentInfo
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const service = await Service.destroy(
      {
        where: { id },
      },
      {
        include: [
          {
            model: Network,
            as: "network",
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
          },
          {
            model: ServicePaymentInfo,
            as: "servicePaymentInfo",
          },
          {
            model: TowTruckCalculation,
            as: "towTruckCalculation",
          },
          {
            model: ServiceSmsMessage,
            as: "serviceSmsMessages",
          },
        ],
      }
    );
    return service;
  } catch (err) {
    throw boom.boomify(err);
  }
};
