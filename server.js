const express = require("express")

const app = express()


app.set("view engine", "ejs")


app.get("/",(req,res) =>{
    const items = [
        {
            title : "D",
            message : "esenvolver applicoes/serviços de forma fàcil"
        },
        {
            title : "E",
            message : "JS usa JavaScript para renderizar HTML"
        },
        {
            title : "M",
            message : "uito faci de usar "
        },
        {
            title : "A",
            message : "morzinho "
        },
        {
            title : "I",
            message : "nstall js"
        },
        {
            title : "S",
            message : "ixtaxe simples"
        }
    ]
    res.render("pages/index",{
        qualitys :items
    }); 

})

app.get("/sobre", (req,res) =>{
    res.render("pages/about")
})

app.listen(8080);
console.log("Rodando")