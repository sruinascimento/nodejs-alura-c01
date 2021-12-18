class Tabelas {
    constructor(conexao) {
        this.conexao = conexao;
        this.criarAtendimentos();
    }
    
    criarAtendimentos() {
        const sql = 'CREATE TABLE Atendimentos (id_aten INT AUTO_INCREMENT NOT NULL, cliente_aten VARCHAR(50) NOT NULL, pet_aten VARCHAR(20), servico_aten VARCHAR(20) NOT NULL, status_aten VARCHAR(20) NOT NULL, observacoes_aten TEXT, PRIMARY KEY(id_aten) )'
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('>>>> Erro na criação de tabelas ', erro);
            } else {
                console.log('>>>> Tabela atendimento foi criada com sucesso');
            }
        })
    }
}

module.exports = Tabelas;