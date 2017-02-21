var helpers = require('./helpers.js')
var expect = require('chai').expect;
var assert = require('chai').assert;

helpers.singleExport("running single export helper!");
helpers.secondSingleExport("into the night!");

var place = helpers.place();
expect(place).to.be.a('number');

var isInRow = helpers.row();
assert(isInRow, "Number is in the row.");
