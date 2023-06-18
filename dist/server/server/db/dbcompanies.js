"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanyByName = exports.getCompaniesByField = exports.getCompaniesByLocation = void 0;
const connection_1 = __importDefault(require("./connection"));
function getCompaniesByLocation(location, db = connection_1.default) {
    return db('companies')
        .where('location', '=', location)
        .select()
        .then((companies) => {
        console.log(`Companies with location (${location}):`, companies);
        return companies;
    })
        .catch((error) => {
        console.error('Error fetching companies by location:', error);
        throw error;
    });
}
exports.getCompaniesByLocation = getCompaniesByLocation;
function getCompaniesByField(field, db = connection_1.default) {
    return db('companies')
        .where('field', '=', field)
        .select()
        .then((companies) => {
        console.log(`Companies with field (${field}):`, companies);
        return companies;
    })
        .catch((error) => {
        console.error('Error fetching companies by field:', error);
        throw error;
    });
}
exports.getCompaniesByField = getCompaniesByField;
function getCompanyByName(name, db = connection_1.default) {
    return db('companies')
        .where('name', '=', name)
        .select()
        .then((companies) => {
        console.log(`Company with name (${name}):`, companies);
        return companies[0];
    })
        .catch((error) => {
        console.error('Error fetching company by name:', error);
        throw error;
    });
}
exports.getCompanyByName = getCompanyByName;
