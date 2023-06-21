import mongoose from "mongoose";
import db from "./dbConnect.js";
import Manga from "../models/manga.js";
import manga from "../data/manga.json" assert { type: "json" };

//Manga Data
let mangaData = manga.map((manga) => {
  return {
    aired_on: manga.aired_on,
    myanimelist_url: manga.myanimelist_url,
    title: manga.title,
    picture_url: manga.picture_url,
    score: manga.score,
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
