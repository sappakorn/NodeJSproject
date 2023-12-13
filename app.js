const express = require("express");
const app = express();
const port = 3020;
const pgp = require("pg-promise")();
const path = require("path");
const db = pgp("postgres://postgres:1234@localhost:5432/myDB");//เชื่อมต่อฐานข้อมูล

app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req,res)=>{
  
})



app.get("/hello", (req, res) => {
  db.any("select * from products")
    .then((data1) => {
      console.log(data1);
      return res.status(200).json(data1);
    })
    .catch((error1) => {
      console.log(error1);
      return res.status(400).json(error1);
    });
});









app.listen(port, () => {
  //เช็คว่าถ้ามีการเชื่อมต่อพอร์ทนี้จะแสดงผลข้างล่าง
  console.log("Hello running port 3020");
});

/* app.post("/api/savestatement", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
}); */

