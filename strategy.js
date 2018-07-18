const Auth0Strategy = require('passport-auth0');
const {DOMAIN, CLIENT_ID, CLIENT_SECRET} = process.env

module.exports = new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: '/login',
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile)
});