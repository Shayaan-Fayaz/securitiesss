const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "SUCCESS",
  });
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
