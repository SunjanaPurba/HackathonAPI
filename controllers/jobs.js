const Job = require("../models/jobs");

const job = async (req, res) => {
    try {
        const myData = await Job.find(req.query);
        res.status(200).json({ myData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { job};