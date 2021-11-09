var express = require("express");
var bodyparser = require("body-parser");
var router = express.Router();

var urlencodedParser = bodyparser.urlencoded(
     {extended:false}
);

var _report = require("./apps/report.js");
var _admin  = require("./apps/admin.js");
var _product= require("./apps/product.js");
var _cart   = require("./apps/cart.js");

var db = require("./apps/db.js");

function HomePage(req,res){
     console.log("Recieving request !");
     res.render("index");
}

router.get("/"     , HomePage);
router.get("/home" , HomePage);
router.get("/about", HomePage);

router.get("/product" , _product._ProdList_); // Checking products
router.get("/prodview", _product._ProdManage_); // Edit products
router.get("/admin"   , _admin._AdminP_);  // Altering the employees
router.get("/report"  , _report._ReportP_); // rpeort page for checking bills
router.get("/cart"    , _cart._CartPage_);     // Cart and total bill

router.post("/prodview", urlencodedParser, _product._Product_Update);

module.exports = router;
