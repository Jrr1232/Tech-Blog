const router = require('express').Router();
const { Comment, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            where: { username: req.session.username }
        });
        // this map should return me my userID which is a FK for my comment and will associate it with a User
        // I can then use my user to gain access to my comments and its text {{comment.text}}
        const usersID = userData.map((user) => user.get({ plain: true }));
        console.log(usersID)
        console.log(req.session.username)

        const commentData = await Comment.create({
            user_id: usersID,
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
