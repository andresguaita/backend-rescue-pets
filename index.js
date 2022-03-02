const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { setTemperaments } = require("./helpers/temperamentData");
const { setRoles } = require("./helpers/rolesData");
const { setSpecies } = require("./helpers/speciesData");
const { setAge } = require("./helpers/ageData");
const { setPetStatus } = require("./helpers/petStatusData");
const { setCountries } = require("./helpers/countryData");
const { setStates } = require("./helpers/stateData");
const { setCities } = require("./helpers/cityData");
const { setGenre } = require("./helpers/genreData");
const { setQuestions } = require("./helpers/questionData");
const { setFormType } = require("./helpers/formTypeData");
const { followUpStatus } = require("./helpers/followUpStatus");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {

  
  server.listen(process.env.PORT || 3001, async() => {
    await setTemperaments()
    await setRoles()
    await setSpecies()
    await setAge()
    await setPetStatus()
    await setGenre()
    await setQuestions()
    await setFormType()
    await followUpStatus()
    // await setCountries()
    // await setStates()
    // await setCities()



    console.log(`Listen in ${process.env.PORT || 3001}`); // eslint-disable-line no-console
  });
});
