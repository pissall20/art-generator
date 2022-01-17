"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata - to be updated for every project. 
// Can also be done after generation, update here and use command 'npm run update_info'
const namePrefix = "Zombies of Zombivali";
const description = "Zombivali - Sa Re Ga Ma";
const baseUri = "https://www.rpsg.in";

/*
background
skins
clothes
eyes
nose
mouth
ear
headgear
neck
handprop
*/


// Write the layers in the correct sequence below
// growEditionSizeTo is the number of images
const layerConfigurations = [
  {
    growEditionSizeTo: 3750,
    layersOrder: [
      { name: "background_female" },
      { name: "skins_female" },
      { name: "clothes_female" },
      { name: "ear_female" },
      { name: "headgear_female" },
      { name: "eyes_female" },
      { name: "nose_female" },
      { name: "mouth_female" },
      { name: "neck_female" },
      { name: "handprop_female" },
    ],
  },
  {
    growEditionSizeTo: 15000,
    layersOrder: [
      { name: "background_male" },
      { name: "skins_male" },
      { name: "clothes_male" },
      { name: "ear_male" },
      { name: "headgear_male" },
      { name: "eyes_male" },
      { name: "nose_male" },
      { name: "mouth_male" },
      { name: "neck_male" },
      { name: "handprop_male" },
    ],
  }
];

const shuffleLayerConfigurations = false;

// To set verbosity - To print debug logs or not. Set true for higher verbosity
const debugLogs = false;

// Set the input and output size of the images
const format = {
  width: 2000,
  height: 2000,
};

// To expore gif of generation process of every image
// Set false to improve performance
const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

// DO NOT SET THIS TO true, it only prints text on canvas
const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

// Format for pixelating images
const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};


// Any extra metadata to be added to the json files
const extraMetadata = {
  creator: "Mooz.One, NME, 404",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  gif,
  preview_gif,
};
