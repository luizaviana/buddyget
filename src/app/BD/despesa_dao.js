class Despesa_dao
{
    // construtor da classe
    constructor(db)
    {  this._db = db;  }

   
    selectNaTabelaDespesa(callback) {
        var sqlConsDespesa = 'idDespesa,idUsuario,idSetor, valorDespesa, descricao, DATE_FORMAT(dataDespesa,"%d/%m/%Y") as dataDespesa FROM DESPESA';
        console.log(sqlConsDespesa);
        this._db.query(sqlConsDespesa,(erro,resultados) =>
            callback(erro,resultados))
    }

    incluiGasto(despesa, id) {
        return new Promise((resolve,reject) => {
            var sqlInsDespesa = "INSERT INTO DESPESA (idUsuario, descricao, valorDespesa,dataDespesa,idSetor) VALUES(" + id + ",'"  + despesa.descricao + "','" + despesa.money + "', '" + despesa.dataDespesa + "', " + despesa.sector + ")";
            console.log("INSERT MONTADO = " + sqlInsDespesa);
            this._db.query(sqlInsDespesa, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('ERRO NA INCLUSÃO DO NOVO REGISTRO NA TAB DESPESA NO BD');
                }
                else { return resolve();  }
            }) 
        })
    }
  

    excluiDespesa(id) {
        return new Promise((resolve, reject) => {
            var sqlDel = "DELETE FROM DESPESA WHERE idDespesa=" + id;
            console.log(sqlDel);
            this._db.query(sqlDel,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('EXCLUSÃO DA DESPESA NÃO REALIZADA!');
                    }
                    resolve();
                }
            );
        });
      }
    
      atualizaDespesa(despesa,id) {
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
      }


      /* 
         atualizaDespesa(despesa,idDespesa) {
        return new Promise((resolve, reject) => {
            var sqlAtualiza = "UPDATE DESPESA set descricao='" + despesa.body.descricao +
                "', valorDespesa='" + despesa.body.orcamento +
                "', dataDespesa='" + despesa.body.data + "', sector='" +
                despesa.body.sector + "' where idDespesa=" + despesa.params.id;
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
      }
      
      
      
      
      
      
      atualizaClientes(cliente) {
        return new Promise((resolve, reject) => {
            var sqlAtualiza = "UPDATE CLIENTES set nomeClie='" + cliente.nome +
                "', cpfClie='" + cliente.cpf +
                "', dataNiverClie='" + cliente.niver + "', emailClie='" +
                cliente.email + "' where idClie=" + cliente.id;
            console.log(sqlAtualiza);
            this._db.query(sqlAtualiza,
                function (erro) {
                    if (erro) {
                        console.log(erro);
                        return reject('ATUALIZAÇÃO DO CLIENTE NÃO REALIZADA COM SUCESSO!');
                    }
                    resolve();
                });
        });
      } */

      selectNaTabelaDespesaPorIdDespesa(idDespesa, callback){
        var sqlCons = 'SELECT idDespesa, idSetor, valorDespesa, descricao, DATE_FORMAT(dataDespesa,"%d/%m/%Y") as dataDespesa FROM DESPESA WHERE idDespesa=' + idDespesa;
        console.log(sqlCons);
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
      }
  
      consultaDespesaPorId(idusuario, callback) {
        var sqlCons = 'SELECT idDespesa, idSetor, valorDespesa, descricao, DATE_FORMAT(dataDespesa,"%d/%m/%Y") as dataDespesa FROM DESPESA WHERE idUsuario=' + idusuario;
        console.log(sqlCons);
        this._db.query(
            sqlCons,
            (erro, resultados) =>
                callback(erro, resultados)
        )
     } 
    
     selectNaTabelaDespesaPorIdUsuario(idUsuario, callback) {
        var sqlConsDespesa = "select d.idDespesa, DATE_FORMAT(d.dataDespesa,'%d/%m/%Y') as 'dataDespesa', d.descricao, d.valorDespesa, s.nome" +
        ' from Despesa d, Setor s where d.idUsuario = '+ idUsuario + ' and d.idSetor = s.idSetor';
        console.log(sqlConsDespesa);
        this._db.query(sqlConsDespesa,(erro,resultados) =>
            callback(erro, resultados))
    }
   gastoTotal(idUsuario, callback){
       var sqlGasto = "SELECT sum(valorDespesa) as 'soma' FROM despesa WHERE idUsuario=" + idUsuario;
       console.log(sqlGasto);
       this._db.query(
           sqlGasto,
           (erro, resultados) =>
            callback(erro, resultados)
       )
   }

   quantoOrcamento(idUsuario, callback){
        var sqlOrcamento = "SELECT orcamento as 'orcamento' FROM usuario WHERE idUsuario=" + idUsuario;

        console.log(sqlOrcamento);

        this._db.query(
            sqlOrcamento,
            function(erro, resultadosOrcamento)
            {
                callback(erro, resultadosOrcamento)
            }
            
        )
   }
    
}
    
module.exports = Despesa_dao;