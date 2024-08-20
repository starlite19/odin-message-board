const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
    { href: "/", text: "Home" }, 
    { href: "new", text: "New message" },
  ];

app.use((req, res, next) => {
    res.locals.links = links;
    next();
  });
  
app.use("/", indexRouter);
app.use("/new", newRouter);



const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));