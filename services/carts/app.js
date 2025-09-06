const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Carts Service is running!");
});

app.listen(PORT, () => console.log(`Carts on port ${PORT}`));
