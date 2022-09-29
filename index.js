const express = require("express");
const app = express();
//2/middleware
const datemiddleware = (req, res, next) => {
  const date = new Date(Date.now());
  const day = date.getDay(); // 24
  const hours = date.getHours();
  console.log(date, day, hours);
  if ((day >= 1 && day <= 5 && hours >= 9 && hours <= 17) === true) {
    next();
  } else {
    console.log("server is not available");

    res.sendFile(__dirname + "/public/close.html");
  }
};
//1routes
app.use(express.static(__dirname + "/public"));
app.get("/", datemiddleware, (req, res) => {
  res.sendFile(__dirname + "/public/Home-page.html");
});
app.get("/Contact", datemiddleware, (req, res) => {
  res.sendFile(__dirname + "/public/Contact-us.html");
});
app.get("/Services", datemiddleware, (req, res) => {
  res.sendFile(__dirname + "/public/Our-Services.html");
});
app.listen(5000, (err) => {
  if (err) throw err;
  else console.log("server is running on port 5000");
});
