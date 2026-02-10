// Provide settings to standalone pages (books.njk, 404.njk, landing pages)
// that don't inherit from the notes/ directory data cascade.
require("dotenv").config();
var constants = require("../helpers/constants");
var allSettings = constants.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    settings: function (data) {
      // Don't override if already set by a deeper data file (e.g., notes.11tydata.js)
      if (data.settings && typeof data.settings === "object" && Object.keys(data.settings).length > 0) {
        return data.settings;
      }
      var noteSettings = {};
      allSettings.forEach(function (setting) {
        noteSettings[setting] = process.env[setting] === "true";
      });
      return noteSettings;
    },
  },
};
