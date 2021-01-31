"use strict";

const express = require('express');
const router = express.Router();
const cities = require('../data/cities.json');

/**
 * Retrieves all cities
 */
router.get('/', function(req, res){
    res.json(cities);
})

/** 
 * Retrieves a specific city by ID, and return the corresponding JSON 
 */
router.get('/:id', function(req, res){
    let reqID = parseInt(req.params.id);
    let result = {};
    
    for(let index in cities){
        let cityID = parseInt(cities[index]["id"]);
        if(cityID === reqID){
            result = cities[index];
        }
    }
    res.json(result);
})

module.exports = router;