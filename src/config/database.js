const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'buddyget'
});

connection.connect(function(err){
    if(err)
    {console.log('erro na conexão com o BD' + err)}
    else
        console.log('Conexão com o BD buddyget relizada com sucesso')
});

module.exports = connection;