const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = function (app) {
  app.post("/api/register", UserController.register);
  app.post("/api/login", UserController.login);
  app.post("/api/logout", UserController.logout);
  app.post("/api/palette/new", UserController.createPalette);
  app.get("/api/users", UserController.getAllUsers);
  app.get("/api/:id/palettes", UserController.palettes);
};
