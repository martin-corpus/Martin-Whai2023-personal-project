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
const dbcompanies_1 = require("../db/dbcompanies");
// import { Companies } from "../../models/companies"
const router = express_1.default.Router();
//server = /api/v1
// GET /api/v1/companies/location/:location
router.get('/companies/location/:location', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('something');
    try {
        const location = req.params.location;
        const companies = yield (0, dbcompanies_1.getCompaniesByLocation)(location);
        console.log(`Fetched companies by location (${location}):`, companies);
        res.json({ companies });
    }
    catch (error) {
        console.error('Error fetching companies by location:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// GET /api/v1/companies/field/:field
router.get('/companies/field/:field', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const field = req.params.field;
        const companies = yield (0, dbcompanies_1.getCompaniesByField)(field);
        console.log(`Fetched companies by field (${field}):`, companies);
        res.json({ companies });
    }
    catch (error) {
        console.error('Error fetching companies by field:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// GET /api/v1/company/:name
router.get('/company/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const company = yield (0, dbcompanies_1.getCompanyByName)(name);
        console.log(`Fetched company by name (${name}):`, company);
        res.json({ company });
    }
    catch (error) {
        console.error('Error fetching commpany by name:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
