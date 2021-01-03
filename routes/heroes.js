const express = require ('express')

const router = express.Router()

const heroesController = require ('../controller/heroesController')

router.get('/',heroesController.heroe)
router.get('/bio/:idHeroe/:ok?',heroesController.bio)

router.get('/detalle/:idHeroe/',heroesController.det)

router.get('/heroes',heroes.json)


module.exports = router