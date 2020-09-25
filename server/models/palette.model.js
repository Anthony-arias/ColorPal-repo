const mongoose = require("mongoose");

const PaletteSchema = new mongoose.Schema(
  {
    paletteName: {
      type: String,
      required: [true, "A palette name is required"],
      minlength: [2, "Palette name must be at least 2 characters"],
    },

    hexValue1: {
      type: String,
      required: [true, "A hex value is required"],
    },

    hexValue2: {
      type: String,
      required: [true, "A hex value is required"],
    },

    hexValue3: {
      type: String,
      required: [true, "A hex value is required"],
    },

    hexValue4: {
      type: String,
      required: [true, "A hex value is required"],
    },

    hexValue5: {
      type: String,
      required: [true, "A hex value is required"],
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports.Palette = mongoose.model("Palette", PaletteSchema);
