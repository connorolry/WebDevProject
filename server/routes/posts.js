const express = require('express');
const Post = require('../models/posts.js')
const router = express.Router();

router
.get('/', (req,res) => {
    try{
        const posts = Post.getPosts();
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