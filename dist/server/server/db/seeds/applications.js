"use strict";
exports.seed = (knex) => {
    // Deletes ALL existing entries
    return knex('applications')
        .del()
        .then(() => {
        // Inserts seed entries
        return knex('applications').insert([
            {
                vacancyId: 0,
                name: '',
                email: '',
                companyName: '',
                companyImage: '',
                coverLetter: '',
                cv: '',
            },
        ]);
    });
};
