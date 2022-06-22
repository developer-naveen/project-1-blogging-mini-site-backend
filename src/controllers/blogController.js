const blogModel = require('../models/blogModel')
const authorModel = require('../models/authorModel')
const { modelNames } = require('mongoose')

const createBlog = async function (req, res) {

  try {
    blogData = req.body
    if (!blogData) {
      res.status(204).send({ status: false, msg: "Please fill the data" })
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

    // req.params.id
    const allBlog = await blogModel.find({$and: [{isDeleted:false},{isPublished:true}]}).select()
    res.status(200).send({status: true, data: allBlog})

  } catch (error) { 
    console.log("this is the error ", error.message)
    res.status(500).send({ msg: error.message })

  }
}




const deleteBlogByPath = async function (req, res) {
  try {

    const idbyPathParam = req.param

    const deletedblog = await blogModel.findOneAndUpdate({ _id: req.params.id }, { $set: { isDeleted: true } }, { new: true })

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

const updateBlog = async function (req, res) {
  try {
    console.log("UPDATE");
    let blogdata = req.query;
    const updateBlog = await blogModel.findOneAndUpdate(
      {},
      { $set: blogdata },
      { new: true }
    );
    res.send({ msg: updateBlog });
  } catch (error) {
    console.log("this is an error", error.message);
    res.status(500).send({ msg: error.message });
  }
};

module.exports.createBlog = createBlog
module.exports.getBlogs = getBlogs
module.exports.deleteBlogByPath = deleteBlogByPath
module.exports.deleteBlogByQuery = deleteBlogByQuery
module.exports.updateBlog = updateBlog
