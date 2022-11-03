const Usuarios_dao = require('../BD/usuarios_dao');

var db = require('../../config/database');
const UsuariosDAO = require('../BD/usuarios_dao');

class UsuariosControllers {

    consultaUsuarioPorLogin(sessao) {
        return function (req, res) {
            const usuarioDAO = new UsuariosDAO(db)
            usuarioDAO.validaAcesso(req.body.login, req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        sessao = req.session;
                        sessao.login = req.body.login;
                        sessao.senha = req.body.senha;
                        console.log("Variavel de Sessao LOGIN = " + sessao.login);
                        console.log("Variavel de Sessao SENHA = " + sessao.senha);
                        res.redirect('/clientes');
                    }
                    else {
                        res.redirect('/login');
                    }
                })
                .catch(erro =>
                    console.log(erro));
        }
    }

    validaAcesso(sessao) {
        return function (req, res) {
            var id;
            sessao = req.session;
            sessao.login = req.body.login;
            const usuarioDAO = new Usuarios_dao(db);
            usuarioDAO.validacaoDeUsuario(sessao.login, req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        usuarioDAO.selectLogin(sessao.login, function (erro, resultadoID) {
                            id = resultadoID[0].idUsuario;
                            console.log('///////////' + id)
                            res.redirect('/guardarID/' + id);
                        })
                        /*function (error, resultadosDespesas) {
                    console.log(resultadosDespesas);
                    res.marko(
                        require('../views/atualizaDespesa.marko'),
                        { despesa: resultadosDespesas[0] }
                    ); */
                        console.log('Usuário existente');

                        // res.redirect('/home');
                    }
                })
                .catch(erro => {
                    console.log('erro (validacaoDeUsuario): ' + erro);
                    res.redirect('/login');
                })
        }
    }
    guardarID(sessao) {
        return function (req, res) {
            console.log("ENTROOOU")
            sessao = req.session;
            sessao.username = req.params.id;
            console.log("//////***aaaaaaaaaaaaa" + sessao.username)
            res.redirect('/profile')
        }
    }
    exibeFormAcesso(sessao) {
        return function (req, res) {
            sessao = req.session;
            sessao.login = req.body.login;
            if (sessao.login == null) {
                res.marko(
                    require('../views/login.marko')
                )
            }
        }
    }
    exibeFormInclusaoUsuario() {
        return function (req, res) {
            res.marko(
                require('../views/cadastro.marko')
            )
        }
    }
    exibeHome() {
        return function (req, res) {
            res.marko(
                require('../views/home.marko')
            )
        }
    }
    exibeStatistics() {
        return function (req, res) {
            res.marko(
                require('../views/statistics.marko')
            )
        }
    }
    exibePerfil(sessao) {
        return function (req, res) {
            const usuarioDAO = new UsuariosDAO(db);
            sessao = req.session;
            usuarioDAO.selectLogin(sessao.login, function (erro, resultadoID) {
                sessao.username = resultadoID[0].idUsuario;
                console.log(sessao.username);
                usuarioDAO.selectDadosUsuario(sessao.username, function (erro, resultadoSelect) {
                    console.log(resultadoSelect);
                    res.marko(
                        require('../views/profile.marko'),
                        { usuario: resultadoSelect }
                    )
                })
            })

        }
    }

    

    formAtualizaUsuario(sessao) {
        return function (req, res) {
            const usuarioDAO = new UsuariosDAO(db);
            sessao = req.session;
            usuarioDAO.selectAtualiza(sessao.login, function (erro, resultadoID) {
                sessao.username = resultadoID[0].idUsuario;
                const nome = resultadoID[0].nome;
                const senha = resultadoID[0].senha;
                const orcamento = resultadoID[0].orcamento;
                console.log("username: " + sessao.username);
                console.log("nome: " + nome);
                console.log("senha: " + senha);
                console.log("orcamento: " + orcamento);
                res.marko(
                    require('../views/atualizaUsuario.marko'),
                    { usuario: resultadoID[0]}
                );
              
            })

        }
    }

    insereNovoUsuario() {
        return function (req, res) {
            const usuarioDAO = new Usuarios_dao(db);
            usuarioDAO.incluirUsuario(req.body)
                .then(res.redirect('/login'))
                .catch(erro => console.log(erro))
        }
    }


    atualizarUsuario(sessao) {
        return function (req, res) {
            const usuarioDAO = new UsuariosDAO(db);
            sessao = req.session;
            console.log("nome: " + req.body.nome);
            console.log("senha: " + req.body.senha);
            const nome = req.body.nome;
            const senha = req.body.senha;
            const orcamento = req.body.orcamento;
            usuarioDAO.atualizarUsuario(nome,senha,orcamento,sessao.username, function (erro, resultadoSelect) {
                console.log("formATUALIZA"+ resultadoSelect);
            })
            .then(res.redirect('/profile'))
            .catch(erro => console.log(erro));

        }
    } 



    excluirUsuario() {
        return function (req, res) {
            const idDoUsuario = req.params.id;
            const usuarioDAO = new Usuarios_dao(db);
            usuarioDAO.excluirUsuario(idDoUsuario)
                .then(res.redirect('/'))
                .catch(erro => console.log(erro))
        }
    }
}

module.exports = UsuariosControllers;