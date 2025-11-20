const router = require('express').Router()
     const controller = require('../controllers/controllers')

     router.post('/createPet',controller.createPet)
     router.post('/createFriend',controller.createFriend)
     router.get('/getFriends/:petname',controller.displayFriends)

     module.exports = router

