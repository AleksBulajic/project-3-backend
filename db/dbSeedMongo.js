import mongoose from "mongoose";
import db from "./dbConnect.js";
import Manga from "../models/manga.js";
import manga from "../data/manga.json" assert { type: "json" };
import chalk from "chalk";

// Define a function to seed the data into the database
// const seedData = async () => {
//     try{
//   await db.dropDatabase();
//   // Drop the existing database

//   // Insert the games data into the database
//   Manga.insertMany(manga);
//   db.close();

// }catch(err){
//     console.log(chalk.bold(`Error: ${err.message}`));
// }
// }
// // Call the seedData function to start seeding the data
// seedData();

console.log(manga)

//Manga Data
let mangaData = manga.map((manga) => {
    
  //   return {
  //     team: {
  //       name: team.team.name
  //     },
  //     venue:{
  //       name: team.venue.name,
  //       city: team.venue.city,
  //       capacity: team.venue.capacity
  //     }
  //   };
  return {
 
      myanimelist_url: manga.myanimelist_url,
      title: manga.title,
      picture_url: manga.picture_url,
      score: manga.score,
    }

});

let makeManga = async () => {
  try {
    await Manga.deleteMany();
    await Manga.create(mangaData);
    console.log("Mangas created and seeded");
  } catch (error) {
    console.error("Error: ", error);
  }
};

makeManga();
