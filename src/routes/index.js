const { Router } = require("express");
const router = Router();
const axios = require("axios");
const pets = require('./pets.js')
const form = require('./form.js');
const roles = require('./roles')
const createShelter = require('./CreateLogsShelters');
const countries = require('./country')
const cities = require('./cities')
const auth= require('./auth')
const temperaments = require('./temperaments')
const states = require('./states')
const Search = require('./Search');
const ShelterAndCityId = require('./Shelter&CityId');
const Shelter = require('./Shelter');

const Species = require('./Species');
const PetStatus = require('./PetStatus');
const Ages = require('./Ages');
const Genres = require('./Genres');
const questions = require('./questions') 
const nodemailer = require('./nodemailer') 
const FollowUp = require('./FollowUp') 
const Profile = require('./Profile')
const FollowUpStatus = require('./FollowUpStatus')

router.use('/',pets)
router.use('/',form)
router.use('/',createShelter)
router.use('/',roles)
router.use('/',countries)
router.use('/',Search)

router.use('/',auth)

router.use('/',states)
router.use('/',cities)
router.use('/',temperaments)
router.use('/',ShelterAndCityId)
router.use('/',Shelter)

router.use('/',Species)
router.use('/',PetStatus)
router.use('/',Ages)
router.use('/',Genres)
router.use('/',questions)
router.use('/',nodemailer)
router.use('/',FollowUp)
router.use('/',Profile)
router.use('/',FollowUpStatus)

module.exports = router;