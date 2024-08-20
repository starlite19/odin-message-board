const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      id: 0,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 1,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages});
  });


indexRouter.post("/new", (req, res) => {
    messages.push({ id: messages.length, text: req.body.messageText, user: req.body.author, added: new Date() });
    res.redirect("/");
});

indexRouter.get("/messages/:id", (req, res) => {
  const messageId = req.params.id;
  res.render("detail", { title: "Message Detail", message: messages[messageId] });
});

module.exports = indexRouter;