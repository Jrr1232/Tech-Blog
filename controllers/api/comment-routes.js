const router = require('express').Router();
const { Comment, User } = require('../../models');
router.post('/', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.session.username }
        });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(userPlainObject)
        const userPlainObject = userData.get({ plain: true });
        const commentData = await Comment.create({
            user_id: userPlainObject.id,
            blog_id: blog_id,
            text: req.body.comment


        });
        res.status(200).json(commentData)
        console.log('post route')
    } catch (err) {
        res.status(400).json(err);
        console.log(req.body)
    }
});



module.exports = router;