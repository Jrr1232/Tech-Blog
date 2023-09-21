const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { Comment, User, Blog } = require('../../models');
// new post 

router.post('/', withAuth, async (req, res) => {
    try {

        const commentData = await Comment.create({
            username: req.session.username,
            blog_id: req.body.blogId,
            text: req.body.commentText
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