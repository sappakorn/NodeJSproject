const express = require("express");
const app = express();
const port = 3020;
const pgp = require("pg-promise")();
const path = require("path"); //ใช้สร้างpath
const { send } = require("process");
const db = pgp("postgres://postgres:1234@localhost:5432/myDB"); //เชื่อมต่อฐานข้อมูล

const productRouter = express.Router(); //เรียกใช้เราเตอร์ ใช้กับหน้าproduct

app.use(express.static(path.join(__dirname, "/public/")));
app.set("views","./src/views") ;//เส้นทางการเข้าถึง folder views
app.set("view engine","ejs");

/* app.get("/...", (req, res) => {
  res.render('index', { products: data1 });
}); */


productRouter.route("/").get((req,res)=>{
  db.any("select * from products")
    .then((data1) => {
      res.render('products', { data1: data1 });
    })
    .catch((error1) => {
      return res.status(400).json(error1);
    });
});



app.use("/products", productRouter)


app.get("/", (req, res) => {
  db.any("select * from products")
    .then((data1) => {
      console.log(data1);
      res.render('index', { data1: data1 });
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
