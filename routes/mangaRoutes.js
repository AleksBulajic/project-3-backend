import {Router} from 'express'
import * as controllers from '../controller/mangaController.js'

const router = Router()



//retrive a list of all free games
router.get('/all', controllers)



// //retrive a speciic game by id
router.get('/:id',controllers)





//get game by title
router.get('/title/:title', controllers)



// //Create a new game
router.post('/all', controllers)


// //Update a game by id
router.put('/:id',controllers)


// //delete games by id
router.delete('/delete/:id', controllers)
 
export default router