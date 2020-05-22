const mongoose = require('mongoose');

    module.exports = (dbname) => {
        mongoose.connect(`mongodb://localhost/${dbname}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log(`Connected to ${dbname}`))
        .catch(err => console.log(`Failed to connect to ${dbname}`));
    }