// let's start!!!! yoo
const express= require('express');
const exphbs= require('express-handlebars');
const bodyParser= require('body-parser')
const mongoose= require('mongoose');
const app = express();
// using body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// setup view engine
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
// env variable
const PORT= process.env.PORT||8000;
// app.use('json');
app.get('/',(req,res)=>{
    res.render('home',{
        title: 'Home'
    });    
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About'
    });
});
app.get('/contact',(req, res)=>{
    res.render('contact',{
        title: 'Contact'
    });
})
app.post('/contactUs',(req,res)=>{
    console.log(req.body);
})
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})
