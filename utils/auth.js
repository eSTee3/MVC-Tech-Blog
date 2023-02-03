const auth = (req, res, next) => {
    // If the user is not already logged into the site, send them to the login page
    if (!req.session.logged_in) {
      res.redirect('/login');

    // If they're already logged in, continue
    } else {
      next();
    }
  };
  
  module.exports = auth;
  