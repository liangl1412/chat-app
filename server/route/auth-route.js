import passport from 'passport';
import express from 'express';

let router = express.Router();

router.get('/logout', (req,res) => {
  res.send('logout');
})
const html = "<a href='/login/google'>click</a>";
router.get('/login', (req,res) => {
  res.send(html);
})

router.get('/login/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/login/google/redirect', passport.authenticate('google'), (req,res) => {
  res.redirect('/');
})

module.exports = router;
