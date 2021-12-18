
module.exports = app => {
    
    app.get('/atendimento', (req, res) => {
        return res.send('Rota de atendimento e você esta realizando um método GET');
    })

    app.post('/atendimento', (req, res) => {
        console.log('>>>> Requisição',req.body)
        return res.send('Rota de tendimento e você está realizando um método POST');
    })
};
