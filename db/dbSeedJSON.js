// import mongoose from "mongoose";
// import axios from "axios";
// import fs from "fs";
// import db from "./dbConnect.js";
// import * as dotenv from "dotenv";
// import Manga from "../models/manga.js";
// import manga from "../data/manga.json" assert { type: "json" };

// // // Load environment variables from .env file
// dotenv.config();
// let apiKey = process.env.API_KEY;

// async function mangaSeed() {
//   const allManga = {
//     method: "GET",
//     url: "https://myanimelist.p.rapidapi.com/manga/top/bypopularity",
//     headers: {
//       "X-RapidAPI-Key": apiKey,
//       "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//     },
//   };

//   await axios
//     .request(allManga)
//     .then(function (response) {
//       // Extract the data from the response
//       const data = response.data;

//       // Convert the data to JSON format
//       const jsonData = JSON.stringify(data, null, 2);

//       // Save the JSON data to a file
//       fs.writeFile("./data/manga.json", jsonData, "utf8", function (err) {
//         if (err) {
//           console.error("Error writing JSON file:", err);
//           return;
//         }
//         console.log("Data has been seeded and saved to manga.json");
//       });
//     })
//     .catch(function (error) {
//       console.error("Error retrieving data:", error);
//     });
// }
// export default mangaSeed;

// const ids = [2, 23390, 13, 116778, 33327, 44347, 121496, 75989, 96792, 11, 21, 12, 113138, 656, 42451, 100128, 119161, 25, 642, 81117, 598, 56805, 26, 90125, 1706, 99007, 3, 1, 564, 104565, 436, 35243, 86337, 3986, 3009, 31499, 583, 908, 24294,  103897, 44485, 45757, 122663, 24692, 25132, 9711, 3031, 70345, 100737];
// const requests = ids.map(id => {
//   const options = {
//     method: 'GET',
//     url: `https://myanimelist.p.rapidapi.com/manga/${id}`,
//     headers: {
//       'X-RapidAPI-Key': apiKey,
//       'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
//     }
//   };

//   return axios.request(options);
// });

// try {
//   const responses = await Promise.all(requests);
//   const data = responses.map(response => response.data);
  
//   fs.writeFileSync('./data/mangaDetails.json', JSON.stringify(data, null, 2));

//   console.log('Data written to file');
// } catch (error) {
//   console.error(error);
// }