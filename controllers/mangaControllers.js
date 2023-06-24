import Manga from "../models/manga.js";

// Get all mangas
export const getMangas = async (req, res) => {
  try {
    // if (!req.headers.authorization) {
    const mangas = await Manga.find({});
    //   res.status(200).json(mangas);
    //   // console.log(`THESE ARE THE MANGAS FROM MANGA CONTROLLERS: ${mangas}`);
    // }

    res.status(200).json(mangas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Find a single manga by id
export const getMangaById = async (req, res) => {
  try {
    const { id } = req.params;
    const manga = await Manga.findById(id);

    if (!manga) {
      return res.status(404).json({ error: "Manga was not found" });
    }

    res.status(200).json(manga);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a manga by title
export const getMangaByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    // Use a regular expression for a case-insensitive search
    // and find all manga titles that start with the searched title.
    const manga = await Manga.find({ title: new RegExp("^" + title, "i") });

    if (manga.length === 0) {
      return res.status(404).json({ error: "No mangas found with that title" });
    }

    // Sort the results in ascending order based on the title.
    manga.sort((a, b) => a.title.localeCompare(b.title));

    res.status(200).json(manga);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


