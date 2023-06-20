import mongoose from "mongoose";
import axios from "axios";
import fs from "fs";
import db from "./dbConnect.js";
import * as dotenv from "dotenv";

// // Load environment variables from .env file
dotenv.config();
let apiKey = process.env.API_KEY;

async function mangaSeed() {
  const allManga = {
    method: "GET",
    url: "https://myanimelist.p.rapidapi.com/manga/top/all",
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

const ids = [
  2, 1706, 656, 13, 1, 51, 25, 642, 70345, 4632, 16765, 44489, 3, 1303, 14893,
  126479, 657, 90125, 23751, 89357, 123992, 336, 104, 1224, 56805, 44227, 35243,
  21525, 34053, 9115, 651, 104039, 100448, 74697, 70261, 28, 14483, 91941,
  40171, 44347, 116778, 26, 418, 86119, 55215, 7, 145863, 72467, 21, 7375,
];
const requests = ids.map((id) => {
  const allMangaDetails = {
    method: "GET",
    url: `https://myanimelist.p.rapidapi.com/manga/${id}`,
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };
  return axios.request(allMangaDetails);
});

try {
  const responses = await Promise.all(requests);
  const data = responses.map((response) => response.data);

  fs.writeFileSync("./data/mangaDetails.json", JSON.stringify(data, null, 2));
  console.log("Data has been seeded and saved to mangaDetails.json");
} catch (error) {
  console.error(error);
}
