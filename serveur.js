require('dotenv').config();
const { error } = require('console');
const testDb =require("./utils/db.utils")
testDb.testDbConnection()

const express =require("express")
const app = express()



app.get('/',(reg,res) => {
    res.end('Hello')
})
app.get('/test',(reg,res) => {
    res.end('2Eme Route')
})

// Permets de gérer une pages 404 qui serra global au serveur 
// '*' Signifie all 
app.all('*', (reg,res) => {
    reg.status(404).send('Not Fund')
})



// RenderError
app.use((error,reg,res,next) => {
    console.log('Error Url ', reg.url);
    console.log('Error',error.message);
    res.status(500)
    res.send('Internal Serveur Error')
})

app.listen(process.env.PORT,()=>{
    console.log(`serveur Ok!!!!! ${process.env.PORT}`);
})
