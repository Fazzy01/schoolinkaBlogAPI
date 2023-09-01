import express from 'express';
import { PostController } from  '../controllers/postController' ;

// express router
const router = express.Router() ;
// linking post controller
const postControl = new PostController();


//  users should be able to search and paginate posts
router.get('/search', async( req, res ) => {
    const searcher = req.query.filter ;
    const results = await postControl.searchPost(searcher);
    res.json({ results }) ;
});

//  users should be able to get all posts
router.get('/', async( req, res ) => {
   const datas = await postControl.getAllPosts();
    res.json({ datas }) ;
    //    console.log(datas) ;
});

//  users should be able to get a specific post
router.get('/:id', async( req, res ) => {
    const sendingId = parseInt(req.params.id);
    const data = await postControl.getPostById(sendingId) ;
    res.json({ data }) ;
    
});

//  users should be able to add post
router.post('/', async( req, res, next ) => {

    try {
        const datasubmit = req.body ;
        const result = await postControl.createPost(datasubmit) ;
        res.json({ result });
      } catch (error: any) {
        next(error.message);
      }
});

//  users should be able to edit and update a specific post
router.patch("/:id", async (req, res, next) => {
    try {
        const updatingId = parseInt(req.params.id);
        const datasubmit = req.body ;
        const result = await postControl.updatePost(updatingId, datasubmit);
        res.json({ result });
    } catch (error: any) {
      next(error.message);
    }
});

//  users should be able to delete a specific post
router.delete("/:id", async (req, res, next) => {
    try {
        const deletingId = parseInt(req.params.id);
        const result = await postControl.deletePost(deletingId);
        res.sendStatus(200);  
    } catch (error: any) {
      next(error.message);
    }
});



module.exports = router ;