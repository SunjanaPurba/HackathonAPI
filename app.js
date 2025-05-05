require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const movieRoutes = require("./routes/movies");
const jobRoutes = require("./routes/jobs");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hi, I am live");
});

app.use("/api/movies", movieRoutes); 
app.use("/api/jobs", jobRoutes);      

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();