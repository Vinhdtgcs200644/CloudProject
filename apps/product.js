const schema = require("../models/products");


function ProductPage(req,res){

     var data;

     schema.find()
          .then((result)=>{
               console.log("Successfully found");
               console.log("Data :");
               console.log(result);
          }).catch((err)=>{
               console.log("Error : " + err);
          });
     res.render("product", {
          myVar : "hello there"
     });
}

function ProductManagePage(req, res){

     res.render("prodview", {
               checkvar:1,
               data:["0","0","0","0"]
          }
     );
}

function UpdateProd(req, res){
     if(!req.body){
          return res.sendStatus(400);
     }
     if(req.body.title==""){
          res.render("prodview", {
               checkvar:2,
               data:["0","0","0","0"]
          });
          return;
     }
     schema.find({title:req.body.title}, (error, data)=>{
          if(error){
               console.log(error);
               console.log("Error detected");
          }else{
               if(data.length==0){
                    res.render("prodview", {
                         checkvar:3,
                         data:["0","0","0","0"]
                    });
                    return;
               }
               var array = [];

               array.push(data[0].title);
               array.push(data[0].price);
               array.push(data[0].origin);
               array.push(data[0].description);

               console.log("Found query result");

               res.render("prodview", {
                    checkvar:4,
                    data:array
               });
          }
     });
}

module.exports = {
     _ProdManage_ : ProductManagePage,
     _ProdList_ : ProductPage,
     _Product_Update : UpdateProd,
};
