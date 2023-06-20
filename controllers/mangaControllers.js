import Manga from '../models/manga.js';

// Get all mangas
export const getMangas = async (req, res) => {
  try {
    if(!req.header.cookie){
      const mangas = await Manga.find({});
      res.status(200).json(mangas);
      console.log(`THESE ARE THE MANGAS FROM MANGA CONTROLLERS: ${mangas}`);
    }
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
        return res.status(404).json({ error: 'Manga was not found' });
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
      const manga = await Manga.findOne({ title: title }); 
      if (!manga) {
        return res.status(404).json({ error: 'Manga with that title not found' });
      }
      res.status(200).json(manga);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

//need to keep working on the full CRUD
