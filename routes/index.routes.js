const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('All good in here')
})

const booksRoutes = require('./books.routes')
router.use('/books', booksRoutes)

module.exports = router
