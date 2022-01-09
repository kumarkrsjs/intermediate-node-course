const express= require('express');

const bodyParser= require('body-parser');
const port=8000;
const app= express();
const userRoute = require('./routes/UserRoute')

app.use(bodyParser.json());
app.use('/users', userRoute);

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

