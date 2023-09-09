const { Blog } = require('../models');

const blogData =
    [
        {
            "id": 1,
            "user_id": 1,
            "username": "junior@hotmail.com",
            "text": "Love this App",
            "title": "App Ratings",
            "datePosted": "2022-01-19",
        },
        {
            "id": 2,
            "user_id": 1,
            "username": "jeju@gmail.com",
            "text": "I love the Sims",
            "title": "Game Reviews",
            "datePosted": "2023-05-23",
        }

    ]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;

