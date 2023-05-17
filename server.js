const express = require('express');
const app = express();
const cors = require('cors');
const hello = require('./api/app')

app.get(cors());
app.get(express.json());

port = process.env.PORT || 3001;

app.get('/', (req,res)=>{
    res.send('Home')
})
app.use('/hello', hello);

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}.`)
})