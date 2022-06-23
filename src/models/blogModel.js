const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const blogsSchema = new mongoose.Schema( {
     title: {
        type: String,
        require: true
    }, 
     
    body: {
        type: String,
        require: true
    }, 
     
    authorId: {
    type: ObjectId,
    ref:'Author'
    },

    tags: [String], 
     
    category: {
        type: String,
        require: true
    }, 
          //  examples: [technology, entertainment, life style, food, fashion]},
     subcategory: [String],
          //  examples[technology-[web development, mobile development, AI, ML etc]] },
     deletedAt: Date, 
     isDeleted: {
        type: Boolean,
        default: false
    }, 
     publishedAt: Date, 
     isPublished: {
        type:Boolean,
        default: false
    }},
         { timestamps: true });

2