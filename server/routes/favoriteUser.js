const express = require("express");
const route = express.Router();
const favoriteController = require("../controllers/favoriteUser");

route.get("/", favoriteController.getAll)
route.post("/setFavorite/:userId", favoriteController.setFavorite)


module.exports = route;