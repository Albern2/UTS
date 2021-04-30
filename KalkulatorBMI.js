const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("Hasil Kalkulasi adalah " + result);
});

app.get("/kalkulatorBMI.html", function(req,res){
  res.sendFile(__dirname + "/kalkulatorBMI.html.html")
});

app.post("/kalkulatorBMI.html", function(req,res){
  var berat = parseFloat(req.body.berat);
  var tinggi = parseFloat(req.body.tinggi);
  var BMI = (berat / (tinggi*tinggi));

  res.send("Hasil " + yourBmi);
});

app.listen(3000, function(){
  console.log("Server berjalan di port 3000");
});
