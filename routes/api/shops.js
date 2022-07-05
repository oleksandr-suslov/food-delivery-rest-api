const express = require('express')
const router = express.Router()


const {
  getShops,
  getShopFromId
} = require('../../controllers/shopController')

router.get('/', getShops)

router.get('/:shopId', getShopFromId)

module.exports = router