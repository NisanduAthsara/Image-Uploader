const express = require('express')
const app = express()
const routes = require('./server/routes/routes')

const hbs = require('express-hbs')

const path = require('path')
const PORT = 8080

app.use(express.json())

app.use(routes)

//serving static files
app.use('/css',express.static(path.join(__dirname,'public/css')))

//connect to the database
require('./server/database/database')();

//set view engine
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//listening to a port
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})