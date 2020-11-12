const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const publicPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
const port = process.env || 3000

app.set('view engine','hbs')

app.set('views',viewPath)
app.use(express.static(publicPath))
hbs.registerPartials(partialsPath)

//getting the api functions
const {weatherApi} = require('./utils/forecast')



app.get('',(req , res) => {
        res.render('index',{
            title:'Weather',
            name:'Nikhil'
        })
})
// app.get('/help',(req , res) => {

//     res.send('Help Page')
// })
// app.get('/about',(req , res) => {

//     res.send('About Page')
// })

app.get('/about',(req,res) => {
    res.render('about',{
        title:'About Us',
        name:'Nikhil'
    })
})
app.get('/help',(req,res) => {
    res.render('help',{
        title:'Help Page',
        name:'Nikhil'
    })
})


app.get('/weather',(req , res) => {
    if(!req.query.address){
        return res.send('Please Provide an address')
    }
    weatherApi(req.query.address,(responseData) => {
            res.send({
                title:'Weather Page',
                address:req.query.address,
                data:responseData
            })
      
    } ) 
})

app.get('*',(req , res) => {

    res.render('404',{ 
        title:'404',
        errorMessage:'Error , Page not found',
        name:'Nikhil'
    })
})

app.listen(port,(port) => {
    console.log("Server is started at port "+ port);
})