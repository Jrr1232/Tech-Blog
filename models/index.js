const User = require('./user')
const Blog = require('./blog')
const Comment = require('./Comment')


Blog.belongsTo(User, { foreignKey: 'id' }); // This associates each Blog with a User
Comment.belongsTo(Blog, { foreignKey: 'id' }); // This associates each Blog with a User


module.exports = { Blog, User, Comment };
