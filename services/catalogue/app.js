const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Catalogue Service is running!");
});

app.listen(PORT, () => console.log(`Catalogue on port ${PORT}`));
