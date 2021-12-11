// let's start!!!! yoo
const express= require('express');
const exphbs= require('express-handlebars');
const app = express();
// setup view engine
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
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
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})
