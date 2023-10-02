const express = require('express')
const tasks = require('./routes/tasks')




const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/api/v1/tasks', tasks)



const PORT = process.env.PORT || 3000

app.listen(PORT , () =>{
    console.log(`Listening on port http://localhost:${PORT}`)
})

app.get('/home',(req,res) =>{
    res.send("Welcome to the task manager app")
})
