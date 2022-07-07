const { Schema, model } = require('mongoose');

const shopSchema = new Schema({ 
  name: {
    type: String,
      },
   active: {
    type: Boolean,
    default: true,
  },
},
{ versionKey: false, timestamps: true }
);

const Shop = model('shop', shopSchema);

module.exports = { Shop };
