const express = require("express")

app = express()

app.get("/", (_, res)=>{
    return res.send("My resume");
});

app.listen(3000, ()=>{
    console.log("Listening to port 3000");
});