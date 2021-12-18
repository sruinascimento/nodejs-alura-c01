const {adicionar, listarAtendimentos, alterar, deletar} = require('../models/atendimento');
 

module.exports = app => {
    
    app.get('/atendimento', (req, res) => {
        listarAtendimentos(res);
    })

    app.post('/atendimento', (req, res) => {
        console.log('>>>> Requisição',req.body);
        adicionar(req.body, res); 
        //return res.send('Rota de tendimento e você está realizando um método POST');
    })

    app.get('/atendimento/:id', (req, res) => {
        console.log('>>>> Params: ', req.params);
        const id = parseInt(req.params.id);
        buscarPorId(id, res);
    })

    app.patch('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        alterar(id, valores, res);
    })

    app.delete('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);
        deletar(id, res);

    });
};
