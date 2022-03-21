const express = require('express')
const app = express()

const hbs = require('express-hbs')

const path = require('path')
const PORT = 8080

app.use(express.json())

//serving static files
app.use(express.static(path.join(__dirname,'public')))

//set view engine
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//routes
app.get('*',(req,res)=>{
    res.render('main')
})

//listening to a port
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})