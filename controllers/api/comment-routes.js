const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(req.session.username)
        const commentData = await Comment.create({
            username: req.session.username,
            comment: req.body.comment

        });
        console.log(username)
        res.status(200).json(commentData)
        console.log('post route')
    } catch (err) {
        res.status(400).json(err);
        console.log(req.body)
    }
});
