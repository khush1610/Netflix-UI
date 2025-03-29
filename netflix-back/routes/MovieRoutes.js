const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Fetch Netflix Movies
router.get("/netflix", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_watch_providers=8&watch_region=US`
    );

    res.json(response.data.results); // Send movie data to frontend
  } catch (error) {
    console.error("Error fetching Netflix movies:", error);
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});

module.exports = router;
