const express = require('express');
const app = express();
const userRoutes = require('./server/routes/user.js')
const postRoutes = require('./server/routes/posts.js')
const path = require('path')
//CORS middleware



app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept, Authorization");
 res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
 next();
});

app.use("/users", userRoutes);
app.use("/posts", postRoutes)

app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;
app.listen(PORT,  ()=> console.log(`Server started on port ${PORT}!`));