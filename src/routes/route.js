const express = require('express');
const router = express.Router();
const autherController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');
const mw = require('../middleware/auth')


//API for Create New Auther
router.post('/authors', autherController.createAuthor )

//API for Create New Blog
router.post('/blogs',mw.authentication, blogController.createBlog )

//API for Get the blog 
router.get('/blogs',mw.authentication, blogController.getBlogs)


router.put('/blogs/:blogId',mw.authentication, blogController.updateBlog)


router.delete('/blogs/:blogId', mw.authentication,blogController.deleteBlogByPath)


router.delete('/blogs',mw.authentication, blogController.deleteBlogByQuery)


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