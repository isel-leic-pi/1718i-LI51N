'use strict'

const express = require('express')
const router = express.Router()
const passport = require('passport')


// GET home page.
router.get('/', (req, res, next) => {
    res.render('index', {title: 'O Penta é nosso!'})
})

// GET login form
router.get('/login', (req, res, next) => {
    res.render('login')
})

// Authenticate
router.post('/login', (req, res, next) => {

    function authenticateUser (username, password, cb) {
        if (username !== 'palbp' || password !== 'penta') {
            cb(new Error('Invalid credentials'), null)
            return
        }

        cb(null, {
            username: 'palbp',
            email: 'palbp@cc.isel.ipl.pt'
        })
    }

    authenticateUser(req.body.username, req.body.password, (err, user) => {
        if (err) { next(err); return }

        req.logIn(user, (error) => {
            if (error) { next(error); return }
            res.redirect('/')
        })
    })
})

passport.serializeUser((user, done) => {
    done(null, user.username)
})

passport.deserializeUser((username, done) => {

    function findUser (userName, callback) {
        if (userName === 'palbp') {
            callback(null, {
                username: 'palbp',
                email: 'palbp@cc.isel.ipl.pt'
            })
            return
        }
        callback(new Error('User does not exist'), null)
    }

    findUser(username, done)
})

module.exports = router;