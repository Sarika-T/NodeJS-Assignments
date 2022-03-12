const express = require("express");
const faker = require("faker");
const bodyParser = require("body-parser")
const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views')
app.set('view engine', 'ejs')
var users = [];
for (let i = 0; i < 10; i++) {
    users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.image()
    })
    console.log(users)
}
app.get("/", (req, res) => {
    res.render("index.ejs", { users });
})
app.get("/form", (req, res) => {
    res.render("form.ejs", { users });
})
app.post("/user/add", (req, res) => {
    console.log(req.body);
    users.push({
        name: req.body.name,
        email: req.body.email,
        image: faker.image.image()
    })
    res.redirect("/");
})

app.get("/user", (req, res) => {
    res.json({
        user: {
            name: req.query.name,
            email: req.query.email
        },
        status: "success",
        message: "Looks Good"
    });
})
app.listen(3000, () => {
    console.log("server is listening")
})