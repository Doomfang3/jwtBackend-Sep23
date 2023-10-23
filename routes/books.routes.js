const { isAuthenticated } = require('../middlewares/routeGuard.middleware')

const router = require('express').Router()

router.get('/', isAuthenticated, (req, res, next) => {
  res.json('All of the books')
})

router.get('/:id', (req, res, next) => {
  res.json('All good in here')
})

router.post('/', isAuthenticated, (req, res, next) => {
  const body = { title, sysnopsis } // What the req.body would look like
  const { userId } = req.payload
  res.json('All good in here')
})

router.put('/:id', isAuthenticated, (req, res, next) => {
  res.json('All good in here')
})

router.delete('/:id', isAuthenticated, (req, res, next) => {
  res.json('All good in here')
})

module.exports = router
