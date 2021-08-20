const request = require('request')
const express = require('express')
const hbs =require('hbs')
const app = express()
const port = 3000


app.set('view engine','hbs')
const hbs = require('hbs')

// const publicDirectory =path(__dirname,'../public')
// app.use(express.static(publicDirectory))

// app.set('view engine','hbs');

// const viewspath = path(__dirname,'../templetes/views')
// app.set('views',viewspath)


// const news =require('./tools/news')
// const pathpartials = path(__dirname ,'../templates/partials')
// hbs.registerPartials(pathpartials)

app.get('/news',function(req,res){
    if(!req.query.address){
          return res.send({error:'you m'})
        }
        news(req.query.address,function(error,data){
          if(error){
            return res.send({error:'you m'})
          }
            res.send({
                articles :data.articles,
            })
          })
        })
app.get('*',function(req,res){
    res.render('404',{
      message:'404 page not found'
    })
  })
   
  app.listen(port, function(){ console.log('server is running')})
