require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DATABASE_URL, NODE_ENV } =
  process.env;

let sequelize;
if (NODE_ENV === "local") {
  sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );
} else {
  sequelize = new Sequelize(`${DATABASE_URL}`, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
}

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Species } = sequelize.models;

const { Pets } = sequelize.models;
const { Shelter } = sequelize.models;
const { Forms } = sequelize.models;
const { Formtype } = sequelize.models;
const { Questions } = sequelize.models;
const { Temperament } = sequelize.models;
const { Users } = sequelize.models;
const { Roles } = sequelize.models;
const { Vaccines } = sequelize.models;
const { Countries } = sequelize.models;
const { Cities } = sequelize.models;
const { Permission } = sequelize.models;
const { Adoptions } = sequelize.models;
const { Requests } = sequelize.models;
const { Profiles } = sequelize.models;
const { PetStatus } = sequelize.models;
const { Age } = sequelize.models;
const { States } = sequelize.models;
const { Genres } = sequelize.models;
const { FollowUp } = sequelize.models;
const { FollowUpStatus } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Species.hasMany(Pets);
Shelter.hasMany(Pets);
Pets.belongsTo(Shelter);
Pets.belongsTo(Species);

//Relation Temperament-Pets
Temperament.hasMany(Pets);
Pets.belongsTo(Temperament);

Age.hasMany(Pets);
Pets.belongsTo(Age);

Formtype.hasMany(Forms);
Forms.belongsTo(Formtype);

Users.belongsTo(Roles);
Roles.hasMany(Users);

Forms.belongsToMany(Questions, { through: "form_questions" });
Questions.belongsToMany(Forms, { through: "form_questions" });

Countries.hasMany(States);
States.belongsTo(Countries);

States.hasMany(Cities);
Cities.belongsTo(States);

Vaccines.belongsToMany(Pets, { through: "petsvaccines", timestamps: false });
Pets.belongsToMany(Vaccines, { through: "petsvaccines", timestamps: false });

Permission.belongsToMany(Roles, { through: "Permission_Role" });
Roles.belongsToMany(Permission, { through: "Permission_Role" });

Forms.hasMany(Adoptions);
Adoptions.belongsTo(Forms);

Forms.hasMany(Requests);
Requests.belongsTo(Forms);

Users.hasMany(Profiles);
Profiles.belongsTo(Users);

PetStatus.hasMany(Pets);
Pets.belongsTo(PetStatus);

Cities.hasMany(Shelter);
Shelter.belongsTo(Cities);

Users.hasOne(Shelter);
Shelter.belongsTo(Users);

Shelter.hasMany(Forms);
Forms.belongsTo(Shelter);

Adoptions.belongsTo(Pets);
Pets.hasMany(Adoptions);

Genres.hasMany(Pets);
Pets.belongsTo(Genres);

FollowUpStatus.hasMany(FollowUp);
FollowUp.belongsTo(FollowUpStatus);

Profiles.hasMany(FollowUp);
FollowUp.belongsTo(Profiles);

Users.hasMany(FollowUp);
FollowUp.belongsTo(Users);

Adoptions.hasMany(FollowUp);
FollowUp.belongsTo(Adoptions);

Requests.hasMany(FollowUp);
FollowUp.belongsTo(Requests);

Shelter.hasMany(FollowUp);
FollowUp.belongsTo(Shelter);

Pets.hasOne(FollowUp);
FollowUp.belongsTo(Pets);

Profiles.hasMany(Adoptions);
Profiles.hasMany(Requests);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
