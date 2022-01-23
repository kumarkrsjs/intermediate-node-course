const express= require('express');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser= require('body-parser');
const port=process.env.port || 8080;
const app= express();
const userRoute = require('./routes/UserRoute')
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', userRoute);

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

