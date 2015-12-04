var express = require('express');
var path = require('path');
var crypto = require('crypto'); // Modulo de criptografia

var app = express(); // Variavel para usar as funções do express
var bodyParser = require('body-parser'); // Modulo usado para requsições GET e POST
// Configuração do Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// ***

// Confifguração da session
var session = require('express-session');
var secret_sess = crypto.createHash('md5').update('session-secret').digest('hex');
app.use(session({secret:secret_sess,name:'session_fake',proxy:true,resave:true,saveUninitialized: true}));
// ***

// Configuração do mysql
var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fake'
});
con.connect(function(err){
  if(err){
    console.log('A base de dados não existe!');
  }else{
    console.log("Conectado!");
  }
});
// ***

app.use(express.static(path.join(__dirname, 'app'))); // Caminho das páginas ---

// ### Rotas de Requsições

// Cadastrar usuário.
app.route('/cad-user').post(function(req,res){
  console.log(session.user);
  var dados = req.body.dados;
  var new_pass = crypto.createHash('md5').update(dados.password).digest('hex');
  req.session.user = true;
  var data = {
    name:dados.name,
    email:dados.email,
    pass:new_pass
  };
  var query = con.query('INSERT INTO  users SET ?',data,function(err,result){
    if(err){
      var json = {
        msg:'User error!'
      };
    }else {
      var json = {
        msg:'Usuário cadastrado!'
      };
    }
    res.send(json);
  });
});
// ***

// Login user.
app.route('/login-user').get(function(req,res){
  console.log(req);
});
// ***

app.listen(3000); // "Starta" o servidor
