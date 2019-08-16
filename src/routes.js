const express = require('express')
const DevController = require('./controllers/DevController')

const router = express.Router();


router.get('/', (req, res) => {
    return res.send('alo')
})

router.post('/dev', DevController.store)

module.exports = router