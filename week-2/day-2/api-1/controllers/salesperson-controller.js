const express = require('express');
const router = express.Router();
const repo = require('../repositories/salesperson-repo');

router.get('/getAll', async (req, res) => {
    res.status(200).send(await repo.getAllSalesPersons());
});  

router.get('/:id', async (req, res) => {
    let response = await repo.getSalesPersonById(req.params.id);
    if(response)
        res.status(200).send(response);
    else
        res.status(404).send(`No Saleperson with ID ${req.params.id} exists!`)
});  

module.exports = router;