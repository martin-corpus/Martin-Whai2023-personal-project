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
const dbapplications_1 = require("../db/dbapplications");
const router = express_1.default.Router();
//server = /api/v1
// POST /api/v1/vacancy/:id
router.post('/vacancy/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).send('Bad Request: ID must be a number');
        return;
    }
    try {
        const applicationData = req.body;
        console.log(applicationData.coverLetter);
        const application = yield (0, dbapplications_1.addApplication)(applicationData);
        res.status(200).json({ application });
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not add application');
    }
}));
// GET /api/v1/applications/:email
router.get('/applications/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const application = yield (0, dbapplications_1.getApplicationsByEmail)(email);
        console.log(`Fetched application by email (${email}):`, application);
        res.json({ application });
    }
    catch (error) {
        console.error('Error fetching application by email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// GET /api/v1/home/applications/:id
router.get('/home/applications/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicationsId = Number(req.params.id);
    if (isNaN(applicationsId)) {
        res.status(400).send('Bad Request: id must be a number');
        return;
    }
    try {
        const applications = yield (0, dbapplications_1.getApplicationsById)(applicationsId);
        if (!applications) {
            res.sendStatus(404);
            return;
        }
        res.json(applications);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not get applications');
    }
}));
// DELETE /api/v1/home/applications/:id
router.delete('/home/applications/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send('Bad Request: ID must be a number');
        return;
    }
    try {
        yield (0, dbapplications_1.deleteApplicationById)(id);
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not delete application');
    }
}));
exports.default = router;
