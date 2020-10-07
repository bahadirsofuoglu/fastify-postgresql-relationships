// External Dependancies
const boom = require("boom");

// Get Data Models
const { TowTruckCalculation } = require("../models/index");

// Get all towTruckCalculations
exports.getFiles = async (req, reply) => {
  try {
    const towTruckCalculations = await TowTruckCalculation.findAll();
    return towTruckCalculations;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single towTruckCalculation by ID
exports.getSingleFile = async (req, reply) => {
  try {
    return TowTruckCalculation.findByPk(req.params.id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new towTruckCalculation
exports.addFile = async (req, reply) => {
  const {
    tariff,
    timeType,
    extraPaymentType,
    beginning,
    tariffGroup,
    fixPay,
    fixKm,
    payPerKm,
    extraPay,
    totalKm,
    thePayAlphaWillPay,
    customerPay,
  } = req.body;
  try {
    return TowTruckCalculation.create(req.body);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing towTruckCalculation
exports.updateFile = async (req, reply) => {
  try {
    const id = req.params.id;

    TowTruckCalculation.update(req.body, {
      where: { id: id },
    });
    return TowTruckCalculation;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a towTruckCalculation
exports.deleteFile = async (req, reply) => {
  try {
    const id = req.params.id;
    const towTruckCalculation = await TowTruckCalculation.destroy({
      where: { id },
    });
    return towTruckCalculation;
  } catch (err) {
    throw boom.boomify(err);
  }
};
