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
        const userPlainObject = userData.get({ plain: true });
        console.log(userPlainObject)
        console.log(req.session.username)
        const commentData = await Comment.create({
            user_id: userPlainObject.id,
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