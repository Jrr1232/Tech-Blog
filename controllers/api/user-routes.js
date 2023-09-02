const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require("../../utils/auth");
// signup new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.logged_in = true;
            console.log(req.session.logged_in)
            res.status(200).json(dbUserData);
        });
        alert("User Created")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            console.log(
                req.session.username
            )
            res.json({ user: dbUserData, message: 'You are logged in' })

        });
        alert("Logged In")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        console.log(req.session);
        req.session.destroy(() => {
            res.status(204).end();

        });
        alert("Logged Out")
    } else {
        res.status(404).end();
        console.log(req.session);
    }
});
module.exports = router;
