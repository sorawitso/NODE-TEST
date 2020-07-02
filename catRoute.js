var express = require('express')
var router = express.Router()

router.get('/eat', function (req, res) {
  res.send('cat eat')
})

router.get('/sleep', function (req, res) {
  res.send('cat 4444sleep')
})


module.exports = router