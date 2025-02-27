const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const header = fs.readFileSync( __dirname + '/views/templates/header.htm', 'utf8');
const landing = fs.readFileSync( __dirname + '/views/templates/landing.htm', 'utf8');
const oidcSummaryArticle = fs.readFileSync( __dirname + '/views/templates/oidc-summary.htm', 'utf8');
const oidcAuthCodeArticle = fs.readFileSync( __dirname + '/views/templates/oidc-auth-code.htm', 'utf8');
const oidcClientCredArticle = fs.readFileSync( __dirname + '/views/templates/oidc-client-cred.htm', 'utf8');
const restSummaryArticle = fs.readFileSync( __dirname + '/views/templates/rest-summary.htm', 'utf8');
const restExampleArticle = fs.readFileSync( __dirname + '/views/templates/rest-example.htm', 'utf8');

app.get('/', (req, res) => {
   res.render('index', { header: header, body: landing});   
});

app.get('/oidc', (req, res) => {
    res.render('index', { header: header, body: oidcSummaryArticle });
});
app.get('/oidc-auth-code', (req, res) => {
    res.render('index', { header: header, body: oidcAuthCodeArticle });
});
app.get('/oidc-client-cred', (req, res) => {
    res.render('index', { header: header, body: oidcClientCredArticle });
});

app.get('/rest-summary', (req, res) => {
    res.render('index', { header: header, body: restSummaryArticle });
});
app.get('/rest-example', (req, res) => {
    res.render('index', { header: header, body: restExampleArticle });
});


const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
