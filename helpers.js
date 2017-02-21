// Can be module.exports or simply exports
module.exports = {

    singleExport: function(message) {
        console.log("Your message is " + message);
    },

    secondSingleExport: function(message) {
      console.log("We ride " + message);
    },

    place: function () {
      return 5;
    },

    row: function () {
      return true;
    }
};