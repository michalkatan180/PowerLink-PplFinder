
const mongoose = require("mongoose");
const favoriteUserSchema = new mongoose.Schema({
    userId: String
});
const FavoriteUser = mongoose.model("FavoriteUser", favoriteUserSchema);
module.exports = FavoriteUser;