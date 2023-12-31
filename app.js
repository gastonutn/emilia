const express = require("express")
const app = express()
const path = require("path")
const PORT = 3030

app.use(express.static("public"))

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","home.html")));

app.get("/about",(req,res) => res.sendFile(path.join(__dirname,"views","about.html")));

app.get("/contacto",(req,res) => res.sendFile(path.join(__dirname,"views","contacto.html")));
app.get("/music",(req,res) => res.sendFile(path.join(__dirname,"views","music.html")))
app.get("/*",(req,res) => res.sendFile(path.join(__dirname,"views","404.html")))

app.listen(PORT, () => console.log(`servidor corriendo en http://localhost:`+PORT))

