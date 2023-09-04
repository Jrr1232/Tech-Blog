const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require("../utils/auth");
// GET all blogs for home
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                },
                {
                    model: Comment,
                },
            ],
        });

        const blogs = blogData.map((blog) => {
            const plainBlog = blog.get({ plain: true });

            // Extract the comment texts from comment objects
            plainBlog.comments = plainBlog.comments.map((comment) => comment.text);

            return plainBlog;
        });

        ; // Now, 'blogs' contains comment texts as strings

        res.render('homepage', { blogs, logged_in: req.session.logged_in });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});



router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});




module.exports = router;
