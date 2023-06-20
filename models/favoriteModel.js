import mongoose from "mongoose";
import Manga from "./manga.js";

const favoriteSchema = mongoose.Schema({
    manga: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Manga'
    }
})

const Favorite = mongoose.model("Favorite", favoriteSchema);


export default Favorite;