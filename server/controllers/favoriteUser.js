const FavoriteUser = require("../models/favoriteUser");

const getAll = async (req, res) => {
    let favorites = await FavoriteUser.find();
    console.log(favorites)
    return res.send(favorites);
}
const setFavorite = async (req, res) => {
    let { userId } = req.params;
    let favorite = await FavoriteUser.findOne({ userId: userId });

    if (!favorite) {
        let newFavorite = new FavoriteUser({ userId: userId });
        try {
            await newFavorite.save();
            return res.send(newFavorite);
        }
        catch (err) {
            return res.status(400)//.send(err.message)
        }
    }
    else {
        try {
            await FavoriteUser.findOneAndRemove({ userId: userId });
            return res.send(userId);
        }
        catch (err) {
            return res.status(400)//.send(err.message)
        }
    }
    return res.status(400)
}


module.exports = {
    getAll, setFavorite
}
