class UsuariosDAO
{
    constructor(db)
    {this._db = db;}

    validacaoDeUsuario(login, senha) {
        return new Promise((resolve, reject) => {
            var sqlConsLogin = "SELECT * FROM usuario WHERE email='" + login + "' and senha='" + senha + "'";
            console.log("SELECT montado = " + sqlConsLogin);
            this._db.query(sqlConsLogin, function (erro, resultado) {
                if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                }
                else{
                    console.log('Erro ao achar usuário');
                }
            })
        })
    }

    incluirUsuario(usuario) {
        return new Promise(
            (resolve, reject) => {
                var sqlInsCliente = "INSERT INTO usuario (nome, email, senha, orcamento) VALUES(" +
                "'" + usuario.nome + "','" + usuario.login + "','" + usuario.senha + "'," + usuario.orcamento + ")";
                console.log(usuario);
                console.log("INSERT montado = " + sqlInsCliente);
                this._db.query(sqlInsCliente, function(erro) {
                    if(erro){
                        console.log(erro);
                        return reject('Erro na inclusão do novo registro. Tabela: Usuario');
                    }
                    else
                        return resolve();
                })
                
            }
        )
    }

    selectLogin(login, callback){
        var sqlConsLogin = "SELECT idUsuario FROM usuario WHERE email='" + login + "'";
        console.log(sqlConsLogin);
        this._db.query(sqlConsLogin, (erro, resultados) =>
            callback(erro, resultados))
    }
    
    selectAtualiza(login, callback){
        var sqlConsLogin = "SELECT idUsuario,  nome, senha, orcamento FROM usuario WHERE email='" + login + "'";
        console.log("atualizaaaaaaa"+ sqlConsLogin);
        this._db.query(sqlConsLogin, (erro, resultados) =>
            callback(erro, resultados))
    }

    selectDadosUsuario(id, callback){
        var sqlConsDados = "SELECT idUsuario, nome, email, orcamento FROM usuario WHERE idUsuario=" + id;
        console.log(sqlConsDados);
        this._db.query(sqlConsDados, (erro, resultados) =>
            callback(erro, resultados))
    }

    atualizarUsuario(nome,senha,orcamento, id) {
        return new Promise((resolve, reject) => {
            var sqlAtualiza = "UPDATE usuario set nome='" + nome +
                "', senha ='" + senha +
                "', orcamento=" + orcamento + " where idUsuario=" + id;
            console.log(sqlAtualiza);
            this._db.query(sqlAtualiza,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('ATUALIZAÇÃO DO USUARIO NÃO REALIZADA :(');
                    }
                    resolve();
                }); 
                 
        });
      }

      /*    atualizaDespesa(despesa,id) {
        return new Promise((resolve, reject) => {
            var sqlAtualiza = "UPDATE DESPESA set descricao='" + despesa.descricao +
                "', valorDespesa='" + despesa.orcamento +
                "', dataDespesa='" + despesa.data + "', idSetor="+
                despesa.sector + " where idDespesa=" + id;
            console.log(sqlAtualiza);
            this._db.query(sqlAtualiza,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('ATUALIZAÇÃO DO DESPESA NÃO REALIZADA COM SUCESSO!');
                    }
                    resolve();
                });
        });
      } */


}

module.exports = UsuariosDAO;