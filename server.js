const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");

// Serve static files like CSS, images, JS
app.use(express.static("public"));

app.use(static);

// View Engine and Templates
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/layout"); // layout is not in root views folder

// Route to index
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});
