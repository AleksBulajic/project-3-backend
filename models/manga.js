import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
  picture_url: String,
  url: String,
  name: String,
});

const mangaSchema = mongoose.Schema({
  aired_on: String,
  myanimelist_url: String,
  title: String,
  picture_url: String,
  score: Number,
  synopsis: String,
  authors: [authorSchema], // Add the authors field to the schema
  firstTenPages: [String],
});

const Manga = mongoose.model("Manga", mangaSchema);

export default Manga;
