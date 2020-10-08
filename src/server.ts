import  express  = require('express');

const app:  express.Application = express();

app.get('/' , ( req , res)=>{
  res.send("ooioi")
})

app.post('/produto' , (req, res)=>{

})

app.listen(2021, ()=>{
  console.log("Runnig")
})
