const blogModel = require('../models/blogModel')
const authorModel = require('../models/authorModel')
const { modelNames } = require('mongoose')

const createBlog = async function (req, res) {

  try {
    const blogData = req.body
    
    let { title, body, authorId, category } = blogData;

    if (Object.keys(data).length == 0) {
        return res.status(400).send({ status: false, msg: "Please request data to be created" })
    }
    if (!title) {
        return res.status(400).send({ status: false, msg: "Please enter title" })
    }
    if (!body) {
        return res.status(400).send({ status: false, msg: "Please enter body" })
    }
    if (body.length < 4) {
        return res.status(400).send({status: false, msg: "body length should be more than 4 characters"})
    }
    if (!authorId) {
        return res.status(400).send({ status: false, msg: "Please enter authorId" })
    }
    if (authorId.length !== 24) {
        return res.status(400).send({ status: false, msg: "Please enter the valid authorId" })
    }
    if (!category) {
        return res.status(400).send({ status: false, msg: "Please enter category" })
    }
    let validAuthor = await authorModel.findById(authorId)
    if (!validAuthor) {
        return res.status(400).send({ status: false, msg: "Please enter the valid authorId" })
    }
    
    
    
    const checkAuthorId = await authorModel.findById(req.body.authorId)

    if (!checkAuthorId) {
      res.status(400).send({ msg: "Please Enter Valid AuthorId" })
    }
    finalData = await blogModel.create(blogData);
    res.status(201).send({ msg: finalData })
  }
  catch (error) {
    console.log("this is the error ", error.message)
    res.status(500).send({ msg: error.message })

  }
}



const getBlogs = async function (req, res) {

  try {

    const filter = req.query;

    const allBlog = await blogModel.find({ $and: [filter, { isDeleted: false }, { isPublished: true }] })

    // console.log(allBlog.lenght);
    if (!allBlog[0]) {
      return res.status(404).send({ status: false, msg: "Sorry! Dude No Blog Found" })

    }
    return res.status(200).send({ status: true, data: allBlog })
    
  } catch (error) {
    console.log("this is the error ", error.message)
    return res.status(500).send({status:false, msg: error.message })

  }
}


/***************************************Update Blog*********************************************/

const updateBlog = async function (req, res) {
  try {
    const getId = req.params
    // console.log(getId.blogId)
    const blogData = req.body

    if(!getId.blogId){
      return res.status(400).send({status: false, msg : "Please Enter the Blog Id"})
    }

    if(getId.blogId !== 24 ){
      return res.status(400).send({status: false, msg : "please enter valid length of blog Id (24)"})
    }
    const updateBlog = await blogModel.findOneAndUpdate(
      { _id: getId.blogId },
      { $set: blogData },
      { new: true }
    );
    // console.log(updateBlog);
    res.send({ msg: updateBlog }); //updated data 
  } catch (error) {
    console.log("this is an error", error.message);
    res.status(500).send({ msg: error.message });
  }
};




const deleteBlogByPath = async function (req, res) {
  try {

    const getId = req.params;

    const deletedblog = await blogModel.findOneAndUpdate({ _id: getId.blogId }, { $set: { isDeleted: true } }, { new: true })

    if (!deletedblog) {
      res.status(400).send({ status: false, msg: "No such as blog found" })
    }
    res.status(200).send({ msg: "Done: this blog is deleted" })

  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

const deleteBlogByQuery = async function (req, res) {
  try {
    let data = req.query
    console.log(data);
    const deleteByQuery = await blogModel.updateMany(
      { $and: [data, { isDeleted: false }] },
      { $set: { isDeleted: true, deletedAt: new Date() } },
      { new: true }
    )
    if (!deleteByQuery)
      return res.status(400).send({ status: false, msg: "The Blog is already Deleted" })
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}


module.exports.creatBelog = createBlog
module.exports.getBlogs = getBlogs
module.exports.deleteBlogByPath = deleteBlogByPath
module.exports.deleteBlogByQuery = deleteBlogByQuery
module.exports.updateBlog = updateBlog



