import  express  = require('express');

const app:  express.Application = express();

var dados = ['teste', 'lala']
app.use(express.json())

app.get('/' , ( req , res)=>{

  res.send(dados)
})

app.post('/post' , (req, res)=>{
  dados.push(req.baseUrl)
})

app.listen(2021, ()=>{
  console.log("Runnig")
})
