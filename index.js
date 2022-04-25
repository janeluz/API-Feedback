const express = require('express');
const cors = require('cors');
const categories = require("./categories/usersController");
const { v4: uuid } = require("uuid");
const req = require('express/lib/request');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/',categories);


app.listen(3030, ()=>{
  console.log("está rodando")
});
