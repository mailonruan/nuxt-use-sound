'use strict';

const defu2 = require('defu');
const path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const defu2__default = /*#__PURE__*/_interopDefaultLegacy(defu2);

const DEFAULTS = {};
const CONFIG_KEY = "sound";
const nuxtModule = async function(moduleOptions) {
  const options = defu2__default['default'](this.options[CONFIG_KEY], moduleOptions, DEFAULTS);
  this.addTemplate({
    fileName: "sound.config.js",
    src: path.resolve(__dirname, "../templates", "sound.config.js")
  });
  this.addPlugin({
    src: path.resolve(__dirname, "../templates", "sound.js"),
    fileName: "sound.js",
    options
  });
  this.nuxt.options.build.transpile.push("defu");
  await this.addModule("@nuxtjs/composition-api/module");
};
nuxtModule.meta = require("../package.json");

module.exports = nuxtModule;
