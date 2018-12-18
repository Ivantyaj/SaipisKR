let userFlag = 0;
const express = require('express'); // Фреймворк вместо http https://metanit.com/web/nodejs/4.1.php
const MongoClient = require('mongodb').MongoClient;
const alert = require('alert-node');

var db;
var menu1 = '';
var menu2 = '';
var menu3 = '';

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // Правильный парсинг JSON, который передали в body
app.use(bodyParser.urlencoded({extended: true})); // Правильный парсинг данных формы

app.set('index', __dirname + '/index');

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017/mydatabase', function (err, database) {
    if (err) {
        return console.log(err);
    } else {
        console.log('База данных успешно подключена!');
    }
    db = database;
    app.listen(8080, function () {
        console.log('Сервер успешно запущен!');
    })
})

function addAtr() {
    if (userFlag == 0) {
        menu1 = '';
        menu2 = '';
        menu3 = '<a href="join">Войти</a>';
    } else {
        menu1 = '<a href="galer">Галерея</a>';
        menu2 = '';
        menu3 = '<a href="exit">Выйти</a>';
    }
}

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    addAtr();
    res.render("index.html", {
        menu1: menu1,
        menu2: menu2,
        menu3: menu3
    });
});

app.get('/page2', function (req, res) {
    res.sendfile('index2.html');
});

app.post('/auth', function (req, res) {
    var login = req.body.login;
    var pass = req.body.password;
    console.log(login + " " + pass);

    userFlag = 1;
    db.collection('users').findOne({login: login, password: pass}, function (err, user) {
        if (err) return res.sendStatus(500);
        if (!user) {
            db.collection('users').insertOne({login: login, password: pass}, function (err, user) {
                if (err) return res.sendStatus(500);
                userFlag = 1;
                alert("Пользователь " + login + " зарегистрирован");
            })
        }
    })

    addAtr();
    res.render("index.html", {
        menu1: menu1,
        menu2: menu2,
        menu3: menu3
    });
    res.sendfile(__dirname + '/views/index.html');
});

app.get('/join', function (req, res) {
    res.sendfile('html/auth.html');
});

app.get('/porod', function (req, res) {
    res.sendfile('html/porods.html')
});

app.get('/history', function (req, res) {
    res.sendfile('html/history.html')
});

app.get('/galer', function (req, res) {
    res.sendfile('html/galer.html')
});


app.get('/exit', function (req, res) {
    userFlag = 0;
    addAtr();
    res.render("index.html", {
        menu1: menu1,
        menu2: menu2,
        menu3: menu3
    });
    res.sendfile('views/index.html')
});
