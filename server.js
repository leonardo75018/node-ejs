const express = require("express")

const app = express()


app.set("view engine", "ejs")


app.get("/",(req,res) =>{
    res.render("index"); 

})

app.get("/sobre", (res,req) =>{
    res.render("about")
})

app.listen(8080);
console.log("Rodando")