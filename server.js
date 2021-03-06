const express = require("express");
// const favicon = require("express-favicon");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();
// // здесь у нас происходит импорт пакетов и определяется порт нашего сервера
app.use(favicon(__dirname + "/dist/favicon.ico"));

// //здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));

// //простой тест сервера
// app.get("/ping", function(req, res) {
//   return res.send("pong");
// });

app.listen(PORT, () => {
  console.log("Server has been started... http://localhost:8080/");
});
