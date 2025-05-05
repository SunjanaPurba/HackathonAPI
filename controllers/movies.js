const Movie = require("../models/movies");

const movie = async (req, res) => {
    try {
        const myData = await Movie.find(req.query);
        res.status(200).json({ myData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { movie };

