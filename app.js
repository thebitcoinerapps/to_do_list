const express =  require('express');
const bodyPareser = require('body-parser');

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello");
});

app.listen(3000, ()=>{
    console.log("Server is started on port 3000");
})
