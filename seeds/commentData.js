const { Comment } = require('../models');

const commentData =
    [
        {
            "id": 1,
            "username": "junior",
            "blog_id": 1,
            "text": "This is my added comment.",
        },
        {
            "id": 2,
            "username": "alex",
            "blog_id": 2,
            "text": "My second comment.",
        }

    ]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;