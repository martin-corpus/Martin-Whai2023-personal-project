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
const dbusers_1 = require("../db/dbusers");
const router = express_1.default.Router();
//server = '/api/v1'
// add the checkJWT
// POST /api/v1/newUser
router.post('/newUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const auth0Id = req?.auth.sub
    // console.log(req.auth)
    try {
        const newUser = req.body;
        console.log('There has been a request to add a new user:');
        console.log(req.body);
        if (!newUser) {
            res.sendStatus(400);
            return;
        }
        // auth0Id will be an column but it will be a unqiue
        const [user] = yield (0, dbusers_1.addNewUser)(newUser);
        console.log({ user });
        res.json({ user });
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}));
exports.default = router;
