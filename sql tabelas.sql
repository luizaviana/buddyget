create table Usuario(
	idUsuario int not null AUTO_INCREMENT,
	nome varchar(100) not null,
	email varchar(50) not null,
	senha varchar(15) not null,
	orcamento float not null,
	primary key(idUsuario)
)

create table setor(
	idSetor int not null AUTO_INCREMENT,
	nome varchar(30),
	primary key(idSetor)
)

create table despesa(
	idDespesa int not null AUTO_INCREMENT,
	valorDespesa float not null,
	dataDespesa date not null,
	idUsuario int not null
	constraint fkUsuario foreign key(idUsuario) references Usuario(idUsuario),
	idSetor int not null
	constraint fkIdSetor foreign key(idSetor) references Setor(idSetor)),
	primary key(idDespesa)
)

/// TABELA DESPESA NO MYSQL
create table despesa(
	idDespesa int not null AUTO_INCREMENT,
	valorDespesa float not null,
	dataDespesa date not null,
	idUsuario int not null,
	idSetor int not null,
	foreign key(idSetor) references Setor(idSetor),
    foreign key(idUsuario) references Usuario(idUsuario),
	primary key(idDespesa)
)