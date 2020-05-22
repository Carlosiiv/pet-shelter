const mongoose = require('mongoose');
    
    const PetSchema = new mongoose.Schema({
        name:{
            type: String,
            required: [true, "Must have a name for your pet!"],
            minlength: [3," Pet name must be atleast 3 characters long"]
        },
        category:{
            type: String, 
            required: [true, "Must have a category for your pet!"],
            minlength: [3,"  Please select an option from the list"]
        },
        description:{
            type: String,
            required: [true, "Must have a description for your pet!"],
            minlength: [3,"  Please provide a valid description longer than 3 characters"]
        },
        skill1:{
            type:String,
        },
        skill2:{
            type:String,
        },
        skill3:{
            type:String,
        },
    },{timestamps:true})

    const Pet = mongoose.model("Pet", PetSchema);

    module.exports = Pet;