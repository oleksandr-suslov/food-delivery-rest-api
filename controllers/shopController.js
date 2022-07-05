const CreateError = require('http-errors')

const { Shop } = require('../model/shops')

const getShops = async (req, res, next) => {
  try {
    const shops = await Shop.find()
    console.log(shops)
    res.status(200).json(shops)
  } catch (error) {
    next(error)
  }
}

const getShopFromId = async (req, res, next) => {
  try {
    const { shopId } = req.params
    const shop = await Shop.findById(shopId)
    if (!shop) {
      throw new CreateError(404, 'Not found')
    }
    res.status(200).json(shop)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getShops,
  getShopFromId
}