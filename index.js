const path = require("path")
const express = require ("express")
const tagsData = require ("./data.json")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/t/:tag", (req, res) => {
    console.log(tagsData)
    const {tag} = req.params
    const data = tagsData[tag]
    if(data){
        res.render ("tag", {data})
    } else {
        res.render("notfound", {tag})
    }
    res.render("tag", {tag})
})


app.listen(8080, ()=> {
    console.log("server running on http://localhost:8080")
})