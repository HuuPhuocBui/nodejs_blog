const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
// //http logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname,'resources','views'));

app.get('/', (req, res) => {
  res.render('home');
  
});

app.listen(3000)
