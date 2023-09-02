const { Comment } = require('../models');

const commentData =
    [
        {
            "id": 1,
            "user_id": 2,
            "text": "This is my added comment.",
        },
        {
            "id": 2,
            "user_id": 2,
            "text": "My second comment.",
        }

    ]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;