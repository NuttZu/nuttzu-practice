const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.listen(port, ()=>{
    console.log(`web running on port ${port}`)
});

app.use(express.static(path.join(__dirname, 'works')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./works/index.html"));
});