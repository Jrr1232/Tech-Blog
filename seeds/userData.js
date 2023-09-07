const { User } = require('../models');

const userData =
    [
        {
            "id": 1,
            "username": "Sal",
            "email": "sal@yahoo.com",
            "password": "jeju12345"
        },
        {
            "id": 2,
            "username": "Junz",
            "email": "junz@yahoo.com",
            "password": "jeju12345"
        }

    ]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;