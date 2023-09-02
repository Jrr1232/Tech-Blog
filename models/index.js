const User = require('./user')
const Blog = require('./blog')
const Comment = require('./Comment')


Blog.belongsTo(User, { foreignKey: 'user_id' }); // This associates each Blog with a User
User.hasMany(Blog, { foreignKey: 'user_id' })
Comment.belongsTo(User, { foreignKey: 'user_id' }); // This associates each Blog with a User


module.exports = { Blog, User, Comment };
