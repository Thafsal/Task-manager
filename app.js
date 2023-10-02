const express = require('express')
const tasks = require('./routes/tasks')
const  connectDB = require('./starter/db/connect')
require('dotenv').config()



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/api/v1/tasks', tasks)



const PORT = process.env.PORT || 3000

app.get('/home',(req,res) =>{
    res.send("Welcome to the task manager app")
})

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT , () =>{
            console.log(`Listening on port http://localhost:${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

start()
  