const dotenv = require('dotenv').config();
const consign = require('consign');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    
    //entendo um formulário
    app.use(bodyParser.urlencoded({extended:true}))
    //enetendo json
    app.use(bodyParser.json())
    consign()
        .include('controllers')
        .into(app)
    
    return app
    
};
