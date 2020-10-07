const fastify = require("fastify");
const bodyParser = require("fastify-formbody");
const cors = require("fastify-cors");
const { sequelize } = require("./models/index");
const app = fastify({ logger: true });

(async () => {
  app.register(bodyParser);
  // Content type parser for the content type application/x-www-form-urlencoded
  app.register(cors);
  // Cross-origin resource sharing
})();

const fileRoute = require("./router/fileRoute");
const insuranceUserRoute = require("./router/insuranceUserRoute");

const fileCustomerRoute = require("./router/fileCustomerRoute");
const fileVehicleInfoRoute = require("./router/fileVehicleInfoRoute");
const fileIncidentInfoRoute = require("./router/fileIncidentInfoRoute");
const serviceRoute = require("./router/serviceRoute");
const networkRoute = require("./router/networkRoute");
const servicePaymentInfoRoute = require("./router/servicePaymentInfoRoute");
const towTruckCalculationRoute = require("./router/towTruckRoute");
const fileSmsMessageRoute = require("./router/fileSmsMessageRoute");
const serviceSmsMessageRoute = require("./router/serviceSmsMessageRoute");
const policyRoute = require("./router/policyRoute");
const cityRoute = require("./router/cityRoute");
const countyRoute = require("./router/countyRoute");
const modelRoute = require("./router/modelRoute");
const brandRoute = require("./router/brandRoute");
// Loop over each route

fileRoute.forEach((route, index) => {
  app.route(route);
});
insuranceUserRoute.forEach((route, index) => {
  app.route(route);
});
fileCustomerRoute.forEach((route, index) => {
  app.route(route);
});
fileVehicleInfoRoute.forEach((route, index) => {
  app.route(route);
});
fileIncidentInfoRoute.forEach((route, index) => {
  app.route(route);
});
serviceRoute.forEach((route, index) => {
  app.route(route);
});
networkRoute.forEach((route, index) => {
  app.route(route);
});
servicePaymentInfoRoute.forEach((route, index) => {
  app.route(route);
});
towTruckCalculationRoute.forEach((route, index) => {
  app.route(route);
});
fileSmsMessageRoute.forEach((route, index) => {
  app.route(route);
});
serviceSmsMessageRoute.forEach((route, index) => {
  app.route(route);
});
policyRoute.forEach((route, index) => {
  app.route(route);
});
cityRoute.forEach((route, index) => {
  app.route(route);
});
countyRoute.forEach((route, index) => {
  app.route(route);
});
modelRoute.forEach((route, index) => {
  app.route(route);
});
brandRoute.forEach((route, index) => {
  app.route(route);
});

const start = async () => {
  try {
    await app.listen(3000, "0.0.0.0");

    app.log.info(`server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
sequelize.sync().then(() => {
  console.log("Users db and user table have been created");
  start();
});
