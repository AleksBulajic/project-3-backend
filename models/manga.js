import mongoose from "mongoose";

const mangaSchema = new mongoose.Schema({
  picture_url: String,
  alternative_titles: {
    english: String,
  },
  information: {
    authors: [
      {
        name: String,
      },
    ],
  },
  statistics: {
    score: Number,
  },
  synopsis: String,
});

const Manga = mongoose.model("Manga", mangaSchema);

export default Manga;
