const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/auth", function (req, res) {
  const streamkey = req.body.key;

  if (streamkey === process.env.STREAMKEY) {
    res.status(200).send();
    return;
  }

  res.status(403).send('Check your emails for a key!');
});

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});
