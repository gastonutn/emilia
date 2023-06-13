const express = require("express")
const app = express()
const path = require("path")
const PORT = 3030

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","home.html")));

app.get("/about",(req,res) => res.sendFile(path.join(__dirname,"view","about.html")));

app.get("/contacto",(req,res) => res.sendFile(path.join(__dirname,"view","contacto.html")));
app.get("/music",(req,res) => res.sendFile(path.join(__dirname,"view","music.html")))
app.get("/*",(req,res) => res.sendFile(path.join(__dirname,"view","404.html")))

app.listen(PORT, () => console.log(`servidor corriendo en http://localhost:`+PORT))

