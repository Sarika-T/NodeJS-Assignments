const express = require("express");
const mongoose = require('mongoose');
const user = require("./model/user");
const bodyparser = require("body-parser");
var methodOverride = require('method-override');
const app = express();
mongoose.connect('mongodb://localhost:27017/assignment_4');
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use(bodyparser());
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/", async(req, res) => {
    const users = await user.find();
    // console.log(users);
    res.render("index.ejs", { users });
});
app.get("/form", (req, res) => {
    res.render("form.ejs");
});

app.post("/users/add", async(req, res) => {
    console.log(req.body);
    const { name, email } = req.body;
    await user.create({
        name,
        email
    })
    res.redirect("/");
});
app.put("/users/:id", async(req, res) => {
    await user.updateOne({ _id: req.params.id }, { selected: true });
    res.redirect("/");
})
app.delete("/users/:id", async(req, res) => {
    await user.deleteOne({ _id: req.params.id }, { selected: true });
    res.redirect("/");
})
app.listen(3000, () => console.log(("server is listening")));