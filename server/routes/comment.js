const express = require('express');
const Comment = require('../models/comment.js')
const router = express.Router();

router
.get('/', (req,res) => {
    try{
        const comments = Comment.getComments();
        res.send(posts);
    } catch(err){
        res.status(401).send({message: error.message});
    }
})
.post('/post', (req,res) => {
    try{
        const post = Post.post(req.body)
        res.send({...post})
    }
    catch(err){
        res.status(401).send({message: error.message});
    }
})

module.exports = router