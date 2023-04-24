const { 
    createData, 
    readData, 
    readSingleData,
    updateData, 
    deleteData 
} = require('../controllers/bootcamp-controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(readData);

router.route('/:id')
    .get(readSingleData)
    .put(updateData)
    .delete(deleteData);

module.exports = router;