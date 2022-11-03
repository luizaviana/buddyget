const Despesa_dao = require('../BD/despesa_dao');

// instância do BD configurado
var db = require('../../config/database');
const UsuariosDAO = require('../BD/usuarios_dao');

class DespesaControllers
{
    listaDespesas() {
        return function (req, res) {
            const despesaDAO = new Despesa_dao(db);
            despesaDAO.selectNaTabelaDespesa(function (erro, resultados) {
                res.marko(
                    require('../views/statistics.marko'),
                    {  despesa: resultados   });
            });
        }}
    
        exibeFormInclusaoGasto() {
            return function(req,res) {
            res.marko(
                require('../views/create-spend.marko'));
            }
        }
    
        insereNovoGasto(sessao) {
            return function(req,res) {
                const despesaDAO = new Despesa_dao(db);
                const usuarioDAO = new UsuariosDAO(db);
                sessao = req.session;
                usuarioDAO.selectLogin(sessao.login, function(erro, resultadoID){
                    sessao.username = resultadoID[0].idUsuario;
                    despesaDAO.incluiGasto(req.body, sessao.username)
                    .then(res.redirect('/statistics'))
                    .catch(erro => console.log(erro));
                })
            }
        }
        
        formAtualizaDespesa(){
            return function(req, res){
                const despesaDAO = new Despesa_dao(db);

                despesaDAO.selectNaTabelaDespesaPorIdDespesa(req.params.id, function (error, resultadosDespesas) {
                    console.log(resultadosDespesas[0].id);                   
                    res.marko(
                        require('../views/atualizaDespesa.marko'),
                        { despesa: resultadosDespesas, idDespesa:req.params.id }
                    );
                });
            }
        }
        
        atualizaDadosDespesas() {
            return function (req, res) {
                const despesaDAO = new Despesa_dao(db);
                console.log(req.params.id)
                despesaDAO.atualizaDespesa(req.body,req.params.id)
                    .then(res.redirect('/statistics'))
                    .catch(erro => console.log(erro));
            }
        }

        

    
        excluiDespesa() {
            return function (req, res) {
                const idDespesa = req.params.id;
                const despesaDAO = new Despesa_dao(db);
                despesaDAO.excluiDespesa(idDespesa)
                    .then(res.redirect('/statistics'))
                    .catch(erro => console.log(erro));
            }
        }
    
        listaDadosDespesas() {
            return function (req, res) {
                
                const idDespesa = req.params.id;
                const despesaDAO = new Despesa_dao(db);
                despesaDAO.consultaDespesaPorId(idDespesa, function (error, resultadosDespesas) {
                    console.log(resultadosDespesas);
                    res.marko(
                        require('../views/atualizaDespesa.marko'),
                        { despesa: resultadosDespesas[0] }
                    );
                });
            }
        }
        exibeEstatistica(sessao) {
            return function(req, res) {
                const despesaDAO = new Despesa_dao(db);
                sessao = req.session;
                despesaDAO.selectNaTabelaDespesaPorIdUsuario(sessao.username, function(erro, resultadoSelect){
                    despesaDAO.gastoTotal(sessao.username, function(erro, resultadoTotal){
                        despesaDAO.quantoOrcamento(sessao.username, function(erro, resultadoOrcamento){
                            
                            var resto = resultadoOrcamento[0].orcamento - resultadoTotal[0].soma
                            res.marko(require('../views/statistics.marko'),
                            {   despesa: resultadoSelect,  soma: resultadoTotal[0].soma, orcamento: resto})
                        })
                        console.log(erro)
                        console.log(resultadoTotal[0])
                    })
                })
            }
        }
    
}

module.exports = DespesaControllers;