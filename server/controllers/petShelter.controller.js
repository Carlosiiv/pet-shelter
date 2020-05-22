const mongoose = require("mongoose");
		const Pet = require("../models/petShelter.model");

		class PetController{
    		//CRUD Stuff
			//getAll
    			getAllPets(req,res){
        			Pet.find().sort({category: 1})
               			.then(x => res.json({Pet: x}))
               			.catch(err => res.json({msg: "Something went wrong",error: err}));
    			}
    			//getOne
    			onePet(req,res){
        			Pet.find({_id: req.params.id})
               			.then(x => res.json({Pet: x}))
               			.catch(err => res.json({msg: "Something went wrong ",error: err}));
    			}
    			//createOne
    			createPet(req,res){
        			Pet.create(req.body)
               			.then(x => res.json({Pet: x}))
               			.catch(err => res.json({msg: "Something went wrong creating your product",error: err}));
    			}
    			//updateOne
    			updatePet(req,res){
        			Pet.findOneAndUpdate({_id: req.params.id},req.body,{runValidators:true})
               			.then(x => res.json({Pet: x}))
               			.catch(err => res.json({msg: "Something went wrong ",error: err}));
    			}
    			//deleteOne 
    			deletePet(req,res){
        			Pet.findOneAndDelete({_id: req.params.id})
               			.then(x => res.json({Pet: x}))
               			.catch(err => res.json({msg: "Something went wrong deleting your product",error: err}));
    			}
		}
		module.exports = new PetController();