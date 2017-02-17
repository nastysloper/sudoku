var helpers = require('./helpers.js')
var single = require('./single_export_helper.js')
var expect = require('chai').expect;

single.singleExport("running single export helper!");

var place = helpers.place();
expect(place).to.be.a('number');
