const express = require("express");
const app = express();
const port = 8000;
const dbname = "Pet_ShelterDB"

const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

require("./server/config/mongoose.config")(dbname);
require("./server/routes/petShelter.routes")(app);


app.listen(port, () => console.log(`Listening on port: ${port}`));