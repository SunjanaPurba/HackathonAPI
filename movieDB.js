require("dotenv").config();
const connectDB = require("./db/connect");
const Movie = require("./models/movies");
const MovieJson = require("./movies.json");
const Job = require("./models/jobs");
const JobJson = require("./jobs.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Movie.deleteMany();
        await Movie.create(MovieJson);
        await Job.deleteMany();
        await Job.create(JobJson);
        
        console.log("Success: Movies added to the database.");
    } catch (error) {
        console.error("Error:", error); 
    } finally {
        process.exit(0); 
    }
};

start();