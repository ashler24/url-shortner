const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine','ejs');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/',(req,res) =>{
    res.render('index')
})

app.listen(PORT,()=>{
    console.log('Server listening on port '+PORT);
});