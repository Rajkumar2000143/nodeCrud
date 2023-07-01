const express=require('express');

const app=express();

app.set('view engine','ejs');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
const a=[];
const b=[];
const c=[];
const d=[];



app.get('/',(req,res)=>{
    // res.send('hai')
    res.render('index',{a:a,b:b,c:c,d:d})
})

app.post('/',(req,res)=>{
   a.push( req.body.uname)
   b.push(req.body.udt)
   c.push(req.body.uage)
   c.push(req.body.usex)
    res.redirect('/')
})

app.listen(600,()=>console.log('running'))