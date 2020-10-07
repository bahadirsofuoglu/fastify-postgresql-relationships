// External Dependancies
const boom = require("boom");

// Get Data Models
const {
  File,
  InsuranceUser,
  FileCustomer,
  FileVehicleInfo,
  FileIncidentInfo,
  Service,
  Network,
  ServicePaymentInfo,
  TowTruckCalculation,
  FileSmsMessage,
  ServiceSmsMessage,
  Policy,
  City,
  County,
  Brand,
  Model,
} = require("../models/index");

// Get all files
exports.getFiles = async (req, reply) => {
  try {
    const files = await File.findAll({
      include: [
        {
          model: InsuranceUser,
          as: "insuranceUser",
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
        },
        {
          model: FileCustomer,
          as: "fileCustomer",
        },
        {
          model: FileVehicleInfo,
          as: "fileVehicleInfo",
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
        },
        {
          model: FileIncidentInfo,
          as: "fileIncidentInfo",
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
          model: Service,
          as: "services",
          include: [
            {
              model: Network,
              as: "network",
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
        },
        {
          model: FileSmsMessage,
          as: "fileSmsMessages",
        },
      ],
    });
    return files;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single file by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return File.findByPk(req.params.id, {
      include: [
        {
          model: InsuranceUser,
          as: "insuranceUser",
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
        },
        {
          model: FileCustomer,
          as: "fileCustomer",
        },
        {
          model: FileVehicleInfo,
          as: "fileVehicleInfo",
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
        },
        {
          model: FileIncidentInfo,
          as: "fileIncidentInfo",
        },
        {
          model: Service,
          as: "services",
          include: [
            {
              model: Network,
              as: "network",
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
        },
        {
          model: FileSmsMessage,
          as: "fileSmsMessage",
        },
      ],
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new file
exports.addFile = async (req, reply) => {
  const {
    no,
    insuranceUserId,
    fileCustomerId,
    fileVehicleInfoId,
    fileIncidentInfoId,
  } = req.body;
  try {
    return File.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing file
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    File.update(req.body, {
      where: { id: id },
    });
    return File;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a file
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const file = await File.destroy(
      {
        where: { id },
      },
      {
        include: [
          {
            model: InsuranceUser,
            as: "insuranceUser",
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
          },
          {
            model: FileCustomer,
            as: "fileCustomer",
          },
          {
            model: FileVehicleInfo,
            as: "fileVehicleInfo",
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
          },
          {
            model: FileIncidentInfo,
            as: "fileIncidentInfo",
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
            model: Service,
            as: "services",
            include: [
              {
                model: Network,
                as: "network",
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
          },
          {
            model: FileSmsMessage,
            as: "fileSmsMessage",
          },
        ],
      }
    );
    return file;
  } catch (err) {
    throw boom.boomify(err);
  }
};
