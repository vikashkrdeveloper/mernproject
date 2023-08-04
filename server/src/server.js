const express =require('express');
const app =express();
require('dotenv').config();
const port=process.env.PORT||5000;
const cookie =require('cookie-parser');
const route=require('../routes/route');
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookie());
app.use(route);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
app.all('*',(req,res)=>{
res.status(200).send('Ooops page not found');
})
app.listen(port,(req,res)=>{
console.log(`http://localhost:${port}`);
})