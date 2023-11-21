const User = require('../User');
const Review = require('../Comment');

Review.belongTo( User, {
    foreignKey: 'user_id'
});

module.exports = { User, Comment }