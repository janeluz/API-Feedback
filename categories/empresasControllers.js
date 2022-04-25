const express = require("express");
const router = express.Router();

const { v4: uuid } = require("uuid");

const empresas = []; 

router.get("/empresas", (req, res) => {
  return response.json(empresas);
});

router.post("/empresas", (req, res) => {
    const { name,cnpj, fantasy_name, address,cep,estado,cidade} = request.body;

    const empresa = {
    id: uuid(),
    name,
    cnpj,
    fantasy_name,
    address,
    cep,
    estado,
    cidade,
    
  };

  empresas.push(empresa);
  
  return response.json(empresa);
});

router.put("/empresas/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;


  empresaIndex = empresas.findIndex(empresa => empresa.id === id);

  if (empresaIndex < 0) {
    return response.status(404).json({ error: "Empresa not found" });
  }

  const empresa = { ...empresas[empresaIndex],
    name,
    cnpj,
    fantasy_name,
    address,
    cep,
    estado,
    cidade,
    };

  empresa[empresaIndex] = empresa;

  return response.json(empresa);
});

router.delete("/empresa/:id", (req, res) => {
  const { id } = req.params;

  empresaIndex = empresas.findIndex(empresa => empresa.id === id);

  if (empresaIndex < 0) {
    return response.status(404).json({ error: "Empresa not found" });
  }

  empresas.splice(empresaIndex, 1);

  return response.status(204).send();
});

module.exports = router;

