const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { Comment, User, Blog } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findOne({
            include: [
                {
                    model: Blog,
                },

            ],
            where: { username: req.session.username },
        });
        console.log(req.body.comment)
        const userPlainObject = userData.get({ plain: true });
        const commentData = await Comment.create({
            user_id: userPlainObject.id,
            blog_id: req.body.blogId,
            text: req.body.comment
        });
        res.status(200).json(commentData)
        console.log('post route')
    } catch (err) {
        res.status(400).json(err);
        console.log(err)
        console.log(req.body)
    }
});



module.exports = router;