const { User } = require('../models');

const userData =
    [
        {

            "id": 1,
            
            "text": "This is my added comment.",
        },
        {
            "id": 2,
            "text": "My second comment.",
        }

    ]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;