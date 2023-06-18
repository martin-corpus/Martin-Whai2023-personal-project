"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const express_1 = __importDefault(require("express"));
const companies_1 = __importDefault(require("./routes/companies"));
const vacancies_1 = __importDefault(require("./routes/vacancies"));
const users_1 = __importDefault(require("./routes/users"));
const applications_1 = __importDefault(require("./routes/applications"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.static((0, node_path_1.join)(__dirname, 'public')));
server.use('/api/v1', companies_1.default);
server.use('/api/v1', vacancies_1.default);
server.use('/api/v1', users_1.default);
server.use('/api/v1', applications_1.default);
exports.default = server;
