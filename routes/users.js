const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('users/users')
})

module.exports = router