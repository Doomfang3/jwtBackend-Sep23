const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('All good in here')
})

const recipesRoutes = './recipes.routes'
router.use('/recipes', recipesRoutes)

module.exports = router
