const express = require('express');

const UserController = require('./Controllers/UserController');
const SessionController = require('./Controllers/SessionController');
const PersonController = require('./Controllers/PersonController');
const CompanyController = require('./Controllers/CompanyController')

const routes = express.Router();

routes.post('/users', UserController.create);

routes.post('/session', SessionController.create);

routes.get('/person/mentors', PersonController.mentorsIndex);
routes.get('/person/persons', PersonController.personIndex);
routes.post('/person/updateArea', PersonController.updatEspecializationArea);


routes.get('/company/mentors', CompanyController.companyIndex);
routes.get('/company/persons', CompanyController.personIndex);
routes.post('/company/updateArea', CompanyController.updatEspecializationArea);

module.exports = routes;
