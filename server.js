const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/urlShortener',{
    useNewUrlParser:true, useUnifiedTopology:true
})

app.set('view engine','ejs');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));



app.get('/',(req,res) =>{
    res.render('index')
})

app.post('/shortUrls', (req,res) =>{

});

app.listen(PORT,()=>{
    console.log('Server listening on port '+PORT);
});