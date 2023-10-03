const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name'],
        maxlength:[20 , 'Name cannot be morethan 20 letters'],
        minlength:[5,'Please enter a valid name'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model("Task" ,TaskSchema)