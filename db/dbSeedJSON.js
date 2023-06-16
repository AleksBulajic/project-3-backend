import mongoose from "mongoose";
import axios from "axios";
import fs from "fs";
import db from "./dbConnect.js";
import * as dotenv from "dotenv";
import Manga from "../models/manga.js";
import manga from "../data/manga.json" assert { type: "json" };

// // Load environment variables from .env file
dotenv.config();
let apiKey = process.env.API_KEY;

async function mangaSeed() {
  const allManga = {
    method: "GET",
    url: "https://myanimelist.p.rapidapi.com/manga/top/bypopularity",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  await axios
    .request(allManga)
    .then(function (response) {
      // Extract the data from the response
      const data = response.data;

      // Convert the data to JSON format
      const jsonData = JSON.stringify(data, null, 2);

      // Save the JSON data to a file
      fs.writeFile("./data/manga.json", jsonData, "utf8", function (err) {
        if (err) {
          console.error("Error writing JSON file:", err);
          return;
        }
        console.log("Data has been seeded and saved to manga.json");
      });
    })
    .catch(function (error) {
      console.error("Error retrieving data:", error);
    });
}
export default mangaSeed;
