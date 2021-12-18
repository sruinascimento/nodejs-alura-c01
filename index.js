const customExpress = require('./config/customExpress');
const app = customExpress();
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('✔️ MySQL');
        const tabela = new Tabelas();
        app.listen(process.env.PORT, ()=> {
            console.log(`🚀 Server is run ${process.env.HOST}:${process.env.PORT}`)
        })
    }
    
})