const { Schema, model } = require("mongoose");

const shopSchema = Schema(
  {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    menu: {
      name: {
        type: String,
      },
      active: {
        type: Boolean,
        default: true,
      },
      id: {
        type: String,
      },
      price: {
        type: String,
      },
      currency: {
        type: String,
      },
      description: {
        type: String,
      },
      foto: {
        type: String,
      },
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = model("shop", shopSchema);

module.exports = { Shop };
