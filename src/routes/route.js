const express = require('express');
const router = express.Router();
const autherController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



//API for Create New Auther
router.post('/authors', autherController.createAuthor )

//API for Create New Blog
// router.post('/blogs', blogController.createBlog )

//API for Get the blog 
router.get('/blogs', blogController.getBlogs)



router.put('/blogs/:blogId', blogController.updateBlog)


router.delete('/blogs/:blogId', blogController.deleteBlogByPath)


router.delete('/blogs', blogController.deleteBlogByQuery)

router.post('/loginAuthor', autherController.authorLogin)




// if api is invalid OR wrong URL

router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})



module.exports = router;
// adding this comment for no reason