"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbvacancies_1 = require("../db/dbvacancies");
const router = express_1.default.Router();
//server = /api/v1
// GET /api/v1/vacancies/:companyId
router.get('/vacancies/:companyId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyId = Number(req.params.companyId);
    if (isNaN(companyId)) {
        res.status(400).send('Bad Request: companyId must be a number');
        return;
    }
    try {
        const vacancies = yield (0, dbvacancies_1.getVacanciesByCompanyId)(companyId);
        if (!vacancies) {
            res.sendStatus(404);
            return;
        }
        res.json(vacancies);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not get vacancies');
    }
}));
// GET /api/v1/vacancy/:id
router.get('/vacancy/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).send('Bad Request: Id must be a number');
        return;
    }
    try {
        const vacancy = yield (0, dbvacancies_1.getVacancyById)(id);
        if (!vacancy) {
            res.sendStatus(404);
            return;
        }
        console.log(`Fetched vacancy by (${id}):`, vacancy);
        res.json(vacancy);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not get vacancy');
    }
}));
// GET /api/v1/vacancy/company/:id
router.get('/vacancy/company/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).send('Bad Request: Id must be a number');
        return;
    }
    try {
        const company = yield (0, dbvacancies_1.getCompanyById)(id);
        if (!company) {
            res.sendStatus(404);
            return;
        }
        console.log(`Fetched vacancy by (${id}):`, company);
        res.json(company);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not get vacancy');
    }
}));
exports.default = router;
