const conexao = require('../infraestrutura/conexao');
const moment = require('moment');

const adicionar = (atendimento, res)=> {
    const dataCriacao = moment().format('YYYY-MM-DD hh:hh:ss');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
    const dataValida = moment(data).isSameOrAfter(dataCriacao);
    const nomeValido = atendimento.cliente.length > 2;

    console.log('>>>> datavalida: ', dataValida);
    console.log('>>>> nomevalido: ', nomeValido);
    

    const validacoes = [
        {
            nome: 'data',
            valido: dataValida,
            msg: 'Data deve ser maior ou igual a data atual'
        },

        {
            nome: 'nome',
            valido: nomeValido,
            msg: 'Nome inválido'
        }
    ]

    const erros = validacoes.filter(campo => !campo.valido);
    console.log('Erros>>>> ', erros);
    const existeErro = erros.length
    console.log('>>>> Length: ',existeErro);
    if (existeErro) {
        return res.status(400).json(erros)
    }
    const atendimentoDatado = {...atendimento, dataCriacao, data};
    console.log('>>>> objeto antes de ser inserido: ', atendimentoDatado);
    const sql = 'INSERT INTO atendimentos SET ?';
    conexao.query(sql, atendimentoDatado, (erro, resultado)=>{
        if (erro) {
            return res.status(400).json(erro);
        } else {
            return res.status(201).json({resultado, "status": "cadastrado"});
        }
    })
}

const listarAtendimentos = (res) => {
    const sql = 'SELECT * FROM atendimentos';

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            return res.status(400).json(erro);
        } 
        
        return res.status(200).json(resultados);
        
    })
}

const alterar = (id, valores, res) => {
    const sql = 'UPDATE atendimentos SET ? WHERE id = ?';
       if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        }
    conexao.query(sql, [valores, id], (erro, resultado) => {
        if (erro) {
            return res.status(400).json(erro);
        }
        return res.status(200).json(resultado);
    })
    
}

const deletar = (id, res) => {
    const sql = 'DELETE FROM atendimentos WHERE id = ?';
    conexao.query(sql, [id], (erro, resultado) => {
        if (erro) {
            return res.status(400).json(erro);
        }
        return res.status(200).json({id: "deletado"});

    })
}

module.exports = {
    adicionar,
    listarAtendimentos,
    alterar,
    deletar
}

