const router = require('express').Router();
const {User} =require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req,res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = user.Data.map((project) => project.get({ plain:true}));

        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_on) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('profile', withAuth, async (req,res) => {
    try{
        const userData =await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },  
        }); 
        const user = userData.get({plain:true});

        res.render('profile', {
            ...user, 
            logged_in: true
        })
    } catch{err} {
        res.status(500).json(err);
    }
});

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        return;
    }
    res.render('login');
});

module.exports = router;