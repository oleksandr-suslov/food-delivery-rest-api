const CreateError = require('http-errors')
// const mongoose = require('mongoose')

const { Shop } = require('../model/shops')

const getShops = async (req, res, next) => {
  try {
    const shops = await Shop.find()
        console.log('shops', shops)
    res.status(200).json(shops)
  } catch (error) {
    next(error)
  }
}

const getShopFromId = async (req, res, next) => {
  try {
    const { shopId } = req.params
    console.log('shopId', shopId)
    // const findId = mongoose.Types.ObjectId(shopId)
    // console.log('findId', findId)

    const shop = await Shop.findById(shopId)
    console.log('shop', shop)
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