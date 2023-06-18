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
exports.deleteApplicationById = exports.getApplicationsById = exports.getApplicationsByEmail = exports.addApplication = void 0;
const connection_1 = __importDefault(require("./connection"));
function addApplication(application, db = connection_1.default) {
    return __awaiter(this, void 0, void 0, function* () {
        const { vacancyId, name, email, companyName, companyImage, coverLetter, cv } = application;
        const [insertedApplication] = yield db('applications')
            .insert({
            vacancyId,
            name,
            email,
            companyName,
            companyImage,
            coverLetter,
            cv,
        })
            .returning([
            'id',
            'name',
            'email',
            'companyName',
            'companyImage',
            'coverLetter',
            'cv',
        ]);
        return insertedApplication;
    });
}
exports.addApplication = addApplication;
function getApplicationsByEmail(email, db = connection_1.default) {
    return db('applications')
        .where('email', '=', email)
        .select()
        .then((applications) => {
        console.log(`Company with name (${email}):`, applications);
        return applications;
    })
        .catch((error) => {
        console.error('Error fetching application by email:', error);
        throw error;
    });
}
exports.getApplicationsByEmail = getApplicationsByEmail;
function getApplicationsById(id, db = connection_1.default) {
    return db('applications')
        .where('id', '=', id)
        .first()
        .then((applications) => {
        console.log(`Application with id (${id}):`, applications);
        return applications;
    })
        .catch((error) => {
        console.error('Error fetching application by id:', error);
        throw error;
    });
}
exports.getApplicationsById = getApplicationsById;
function deleteApplicationById(id, db = connection_1.default) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db('applications').where({ id }).delete();
    });
}
exports.deleteApplicationById = deleteApplicationById;
