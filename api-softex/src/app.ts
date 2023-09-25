import 'reflect-metadata'
import express from 'express';
import { deleteUser, findUsers, newUser, updateUser } from './controllers/user';

const app = express();

app.use(express.json());

// Rotas

app.post("/users", newUser);
app.get("/users", findUsers);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);


export default  app;


