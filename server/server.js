const express = require('express');
const {connectMongoose} = require("./config/database")
const app = express();
const postRouter = require("./routes/posts")
const autRouter =require("./routes/auth")
const cors = require("cors")
const commentRouter = require("./routes/comments")
app.use(cors())
app.use(express.json());

app.use("/auth", autRouter);

app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(5000, () => {
    console.log("Server are running port 5000");
    connectMongoose()
});

module.exports = app; // Exporting 'app' module
