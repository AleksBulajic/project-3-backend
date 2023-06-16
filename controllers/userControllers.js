
import User from '../models/user'
//login //signup 



// GET user
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the user' });
  }
};


// POST user
export const postUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create a new user' });
    }
};

//UPDATE
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the user' });
  }
};
// DELETE 
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete the user' });
    }
};


/////////////////////////////////////////////////////////////



//GET specific manga favorites
router.get('/users/favoite/manga/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the manga from favorites' });
    }
  });

// POST specific manga favorites
router.post('/users/favoite/manga/:id', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create a manga onto favorites' });
    }
  });
    // UPDATE specific manga favorites

// UPDATE specific manga favorites
router.put('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update the manga from favorites' });
    }
  });

//DELETE specific manga favorites
router.delete('/users/favoite/manga/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete the manga from favorites' });
    }
  });
  