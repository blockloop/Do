var Mocha = require("mocha");
global.chai = require('chai');
var sinonChai = require("sinon-chai");
var fs = require('fs');
global.should = chai.should;
var jsdom = require('jsdom').jsdom;

global.assert = chai.assert;
global.document = jsdom('<html><head><script></script></head><body><input type="text" id="globalAccountNumber" value="1" /><div id="testDiv"></div></body></html>');
global.window = document.createWindow();
var $ = global.$ = require("jquery").create(window);
var _ = global._ = require('lodash');
var DEBUG = false;
global.navigator = window.navigator = {};
navigator.userAgent = 'NodeJs JsDom';
chai.use(sinonChai);

var mocha = window.mocha = new Mocha({
    ui: 'bdd'
});
mocha.opts = [{globals: ['angular','module','window.angular']}];
mocha.files = [];

var requires = [
    'scripts/lib/angular*.js',
    'test/lib/angular/angular-mocks.js',
    'scripts/*/*.js',
    'scripts/app.js'
];
var specs = [
    'test/unit/**/*spec.js'
];

var glob = require('glob');

var requireFiles = _.uniq(_.flatten(_.map(requires, function(pattern) {
    return glob.sync(pattern, {nocase: true});
})));
_.forEach(requireFiles, function (file) {
    mocha.opts.push({
        require: file
    });
});

var specFiles = _.flatten(_.map(specs, function(pattern) {
    return glob.sync(pattern, {nocase: true});
}));
_.forEach(specFiles, function (file) {
    mocha.files.push(file);
});

mocha.reporter('spec');
mocha.run();
