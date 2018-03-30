var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
exports.dashboard = function(req, res) {
 
    res.render('dashboard', {username: req.user.username});
 
} 
exports.forum = function(req,res) {
    res.render('forum',{username: req.user.username, id: req.user.id});
}
exports.community = function(req, res) {
 
    res.render('community', {username: req.user.username, id: req.user.id});
 
}
exports.communityForum = function(req, res) {
 
    res.render('communityForum', {username: req.user.username, id: req.user.id});
 
}
exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}