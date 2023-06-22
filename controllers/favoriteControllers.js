import axios from "axios";
import Manga from "../models/manga.js";
import Favorite from "../models/favoriteModel.js";

// GET All
export const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find().populate("manga");
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET
export const getFavorites = async (req, res) => {
  try {
    const mangaId = req.params.id;

    Manga.findById(mangaId)
      .then((manga) => {
        if (!manga) {
          return res.status(404).json({ error: "Manga not found" });
        }
        res.json(manga);
      })
      .catch((error) => res.status(500).json({ error: error.message }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST
export const addFavoriteManga = async (req, res) => {
  try {
    const mangaId = req.params.id;

    // check if the manga exists
    const manga = await Manga.findById(mangaId);
    if (!manga) {
      return res.status(404).json({ message: "Manga not found" });
    }
    // check if the favorite already exists
    const isAlreadyFavorite = await Favorite.findOne({ manga: mangaId });
    if (isAlreadyFavorite) {
      return res.status(200).json({ isAlreadyFavorite: true });
    }

    // Create the favorite
    const favorite = new Favorite({ manga: mangaId });
    await favorite.save();
    res.status(200).json({ favorite });
  } catch (error) {
    console.error("Error creating favorite:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE
export const deleteFavorite = async (req, res) => {
  const favoriteId = req.params.id;

  Favorite.findByIdAndRemove(favoriteId)
    .then((favorite) => {
      if (!favorite) {
        return res.status(404).json({ error: "Favorite not found" });
      }
      res.json({ message: "Favorite deleted" });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

// UPDATE
export const updateFavorite = async (req, res) => {
  const mangaId = req.params.id;

  try {
    const updatedFavorite = await Favorite.findByIdAndUpdate(
      mangaId,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedFavorite) {
      return res.status(404).json({ error: "Manga not found" });
    }

    res.json(updatedFavorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
