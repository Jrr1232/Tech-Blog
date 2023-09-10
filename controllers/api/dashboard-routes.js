const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();

        const blogs = blogData.map((blog) => {
            const plainBlog = blog.get({ plain: true });
            return plainBlog;
        });
        console.log(blogs)

        res.render('dashboard', { blogs, logged_in: req.session.logged_in });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogData = await Blog.create({
            user_id: req.session.user_id,
            username: req.session.username,
            text: req.body.text,
            title: req.body.title,
            datePosted: new Date(),
        })

    } catch (err) {
        console.log(err)

    }
    res.render('dashboard')
})

router.put('/:id', async (req, res) => {
    try {

        await Blog.update(
            {
                text: req.body.text,
                title: req.body.title
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        // res.render('dashboard'); // Render the 'dashboard' view after successful update
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error'); // Handle errors appropriately, this is just an example
    }
});

router.delete('/:id', (req, res) => {
    // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
    Blog.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => res.json(err));
});




module.exports = router;
