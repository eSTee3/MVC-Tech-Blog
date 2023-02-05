const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// A single User can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// Each post belongs to a single user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
// Each user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
// Each comment belongs to a single user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// Eash post can have many comments
Post.hasMany(Comment, {
    foreignKey : 'post_id'
});
// Each post belongs to a single comment
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };