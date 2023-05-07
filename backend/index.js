const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();
const cors = require('cors');
app.use(cors());

// //CORS including to avoid error
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:800");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accespt"
  );
  next();
})


app.use(
  express.urlencoded({ extended: true })
);

app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require('./Routes/OrderData'));
app.get('/', (req,res)=>{
  res.send('Hello World! ..........');
})
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})


