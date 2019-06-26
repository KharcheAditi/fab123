var express = require('express');
var app = express();

var productController=function(req, res){
  var products = [
    {ProductId:1, ProductName:"Samsung", Quantity:1, Price:20000, Decription:"Black,64GB"},
    {ProductId:2, ProductName:"Redmi", Quantity:1, Price:15000, Decription:"Rose Gold,128GB"},
    {ProductId:3, ProductName:"OnePlus", Quantity:1, Price:35000, Decription:"white,64GB"},
    {ProductId:4, ProductName:"Asus", Quantity:1, Price:20000, Decription:"Black,64GB"}
  ];
  res.send(products);
};

var customerController=function(req, res){
  var customers = [
    {CustomerId:1, CustomerName:"Aishwarya Nagtilak", EmailId:"aishwaryanagtilak@gmail.com",ContactNo:1234556789,Address:"Pandharpur"},
	{CustomerId:2, CustomerName:"Tejashri Sawant", EmailId:"Tejashrisawant@gmail.com",ContactNo:9999999999,Address:"Karmala"},
	{CustomerId:3, CustomerName:"Pooja Chavan", EmailId:"Poojachavan@gmail.com",ContactNo:1234555555,Address:"Pune"}
 
 ];
 
    res.send(customers);
};
app.get('/products',productController);
app.get('/customers',customerController);

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8088", host, port)
})
 
