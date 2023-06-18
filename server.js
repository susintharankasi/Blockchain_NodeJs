let express = require('express');
let app = express();

app.use('/assets',express.static('assets'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
    });
app.get('/metamask', (req, res) =>{
    res.render('pages/metamask');
    });
app.get('/trans', (req, res) =>{
    res.render('pages/trans');
    });

app.listen(8085);