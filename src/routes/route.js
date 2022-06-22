const express = require('express');
const router = express.Router();
const autherController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



//API for Create Auther
router.post('/authors', autherController.createAuthor )

//API for Create Book
router.post('/blogs', blogController.createBlog )

//API for Get the blog 
router.get('/blogs', blogController.getBlogs)



router.put('/blog/:blogId', blogController.updateBlog)


// router.delete('/blogs/:blogId', blogController.deleteBlogByPath)
router.delete('/blogs/:blogId', blogController.deleteBlogByQuery)



module.exports = router;
// adding this comment for no reason