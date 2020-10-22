import  express  = require('express');
import { Connection, createConnection} from 'typeorm'
import './database'
import {User} from './entity/User'

const app:  express.Application = express();

var dados = ['teste', 'lala']
app.use(express.json())

app.get('/' , ( req , res)=>{
  createUser(Connection);
  res.send(dados);
})

app.post('/post' , (req, res)=>{
  dados.push(req.baseUrl)
})

async function createUser(connection){
  const user = new User();
  user.firstName = "Lucas";
  user.lastName = "Vieira";
  user.age = 18;


    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

}


app.listen(2021, ()=>{
  console.log("Servidor: Ok")
})
