var express = require('express');
var mysql = require('mysql');
var app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
var crypto = require('crypto');
var uuid = require ('uuid');
app.use(bodyParser.urlencoded({extended: true}));
var multer, storage, path;
multer = require('multer')
path = require('path');
var fs = require('fs');


//database connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'techtest',
    port: 3308
});
connection.connect();

// server creation
var server = app.listen(3007,function(){
    var host = server.address().address;
    var port = server.address().port;
      console.log("Server is up and listening on 3007...");
});




app.get('/trinumber',function(req,res){
var tab = [105, 45, 101, 462, 74];
var ordre = 2;

  function sortAsc(tab){
for(var i = 0; i < tab.length; i++){
  //stocker l'index de l'élément minimum
  var min = i;
  for(var j = i+1; j < tab.length; j++){
    if(tab[j] < tab[min]){
     // mettre à jour l'index de l'élément minimum
     min = j;
    }
  }
  var tmp = tab[i];
  tab[i] = tab[min];
  tab[min] = tmp;
}
return tab;
};

function sortDesc(tab){
for(var i = 0; i < tab.length; i++){
//stocker l'index de l'élément minimum
var max = i;
for(var j = i+1; j < tab.length; j++){
  if(tab[j] > tab[max]){
   // mettre à jour l'index de l'élément minimum
   max = j;
  }
}
var tmp = tab[i];
tab[i] = tab[max];
tab[max] = tmp;
}
return tab;
};
if(ordre==1) {
sortAsc(tab);
}else{
sortDesc(tab);
}
res.send(JSON.stringify(tab));

});



app.get('/Tri',function(req,res){
    var query = "select * from tech";
   connection.query(query,function(error,results){
    if (error) throw error;
    res.send(JSON.stringify(results));
})
});
