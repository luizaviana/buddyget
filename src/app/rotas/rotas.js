
const UsuarioControlador = require('../controllers/usuarios_controller');
const usuarioCont = new UsuarioControlador();

const DespesaControlador = require('../controllers/despesas_controller');
const despesaCont = new DespesaControlador();

module.exports = (app, session, express, bodyParser) => {
    app.use((req, res, next) => {
        res.header('Acess-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })

    //lu - login e cadastro
    var sessao;
    app.get('/', function (req, res) {
        // criação das variáveis de sessão
        sessao = req.session;
        sessao.login;
        sessao.username;
        if (sessao.login) {
            return res.redirect('/login');
        }
        else {
            return res.redirect('/landing-page');
        }
    });

    app.get('/landing-page', function (req, res) {
        res.marko(
            require('../views/landing-page.marko')
        )
    })

    app.get('/guardarID/:id', usuarioCont.guardarID(sessao))

    app.post('/insertBDUsuario', usuarioCont.insereNovoUsuario());

    app.post('/validaBDUsuario', usuarioCont.validaAcesso(sessao));

    app.post('/validacaoAcesso', usuarioCont.consultaUsuarioPorLogin());



    //let -exibe páginas.marko

    app.get('/login', usuarioCont.exibeFormAcesso(sessao));
    app.get('/cadastro', usuarioCont.exibeFormInclusaoUsuario())
    app.get('/home', usuarioCont.exibeHome())
    app.get('/statistics', despesaCont.exibeEstatistica(sessao))
    app.get('/profile', usuarioCont.exibePerfil(sessao))
    app.get('/create-spend', despesaCont.exibeFormInclusaoGasto());



    //gi

    //despesa
    app.post('/insertBDgasto', despesaCont.insereNovoGasto(sessao));
    app.get('/atualizarDespesa/:id', despesaCont.formAtualizaDespesa())
    app.post('/atualizarDadosDespesa/:id', despesaCont.atualizaDadosDespesas())
    app.get('/removeDespesa/:id', despesaCont.excluiDespesa())

    //usuario
    app.get('/atualizaDadosUsuario', usuarioCont.formAtualizaUsuario(sessao))
    app.post('/atualizaUsuario/:id', usuarioCont.atualizarUsuario(sessao));
    

    
    /*/app.get('/atualizaDadosUsuario', function (req, res) {
        res.marko(
            require('../views/atualizaUsuario.marko')
        )
    })*/

}