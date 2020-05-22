const petShelterController = require("../controllers/petShelter.controller");

	module.exports = (app) => {
        app.get("/api/pets", petShelterController.getAllPets),
        app.post("/api/pets", petShelterController.createPet),
        app.get("/api/pets/:id", petShelterController.onePet),
        app.delete("/api/pets/:id", petShelterController.deletePet),
        app.put("/api/pets/:id", petShelterController.updatePet)
};