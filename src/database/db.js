//Importando o o modulo que iremos usar
const Database = require('sqlite-async')

//Criando a funcao que cria as tabelas e será chamada mais abaixo, durante a abertura do database.
//Criando as tabelas dos bancos de dados. Comandos SQL devem ser sempre colocados entre crases `` quando estiverem dentro de uma database. Tabelas não podem ter o hifen domo separador, USAR o underline
//id INTEGER PRIMARY KEY >> Coluna do dado (id) será um integer e será primary key e se criará sozinho, o ultimo comando dentro do bloco NÃO DEVE levar virgula 

function execute(db){
    
    return db.exec(`
    
        CREATE TABLE IF NOT EXISTS proffys (    
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        whatsapp TEXT,
        bio TEXT
       );

       CREATE TABLE IF NOT EXISTS classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject INTEGER,
        cost TEXT,
        proffy_id INTEGER
       );

       CREATE TABLE IF NOT EXISTS class_schedule (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           class_id INTEGER,
           weekday INTEGER,
           time_from INTEGER,
           time_to INTEGER
       );
    `)
}
//Abre (cria) a DB chamada de database.sqlite (menu lateral) src>database>database.sqlite . Module.exports é um objeto que tem a funcionalidade armazenar dados que serão exportados.
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)