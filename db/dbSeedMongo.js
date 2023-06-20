import mongoose from "mongoose";
import db from "./dbConnect.js";
import Manga from "../models/manga.js";
import mangadetails from "../data/mangaDetails.json" assert { type: "json" };
import mangaSynopsis from "../data/mangaSynopsis.json" assert { type: "json" };

//Manga Data
let mangaData = mangadetails.map((manga) => {
  return {
    picture_url: manga.picture_url,
    title: {
      english: manga.alternative_titles.english,
    },
    information: {
      authors: manga.information.authors.map((author) => ({
        name: author.name,
      })),
    },
    statistics: {
      score: manga.statistics.score,
    },
    synopsis: manga.synopsis,
  };
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