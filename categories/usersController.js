const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

const users = [];

router.get("/users", (request, response) => {
  return response.json(users);
});

router.post("/users", (request, response) => {
  const { name, foto, email, senha} = request.body

  const user = {
    id: uuid(),
    name,
    foto,
    email,
    senha
  };

  users.push(user);
  
  return response.json(user);
});

router.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const {name, foto, email, senha} = request.body;

  userIndex = users.findIndex(user => user.id === id);

  if (userIndex < 0) {
    return response.status(404).json({ error: "User not found" });
  }

  const user = { ...users[userIndex],
     name, 
     foto, 
     email,
     senha
    };

  user[userIndex] = user;

  return response.json(user);
});

router.delete("/users/:id", (request, response) => {
  const { id } = request.params;

  userIndex = users.findIndex(user => user.id === id);

  if (userIndex < 0) {
    return response.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);

  return response.status(204).send();
});




module.exports = router;