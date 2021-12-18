CREATE DATABASE agenda_petshop;

USE agenda_petshop;

CREATE TABLE atendimentos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(50) NOT NULL,
    pet VARCHAR(20),
    servico VARCHAR(20) NOT NULL,
    observacoes TEXT,
    status VARCHAR(50) NOT NULL,
    data DATETIME NOT NULL,
    dataCriacao DATETIME NOT NULL
);