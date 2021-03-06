const express = require('express');
const User = require('../models/user.js')
const router = express.Router();

router.get('/', (req,res) => {
    try{
        const users = User.getUsers();
        res.send(users);
    } catch(err){
        res.status(401).send({message: error.message});
    }
});

router.post('/login', async (req,res) => {
    try{
        const user = await User.login(req.body.username, req.body.password)
        res.send({...user, password: undefined})
    }
    catch(error)
    {
        res.status(401).send({message: error.message})
    }
})

router.post('/register', (req, res) => {
    try {
      const user = User.register(req.body);
      res.send({...user, password: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

router.delete('/delete', (req, res) => {
    try {
      User.deleteUser(req.body.userId);
      res.send({success: "We'll miss you...:("});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })



module.exports = router;