var $ = require('jquery');

// requiring the whole file returns an object with functions for each
// template in the file
var greetingTemplates = require('./templates/greetings.soy');
var testTemplates = require('./templates/test.soy');

// can also require individual templates directly
var greetPerson = require('./templates/greetings.soy').hello;

// an idea to combine templates (e.g for our knockout templates)
// so that if templates look for something like Templates.Send.Messages it will find them
global.Templates = {};
global.Templates.greetingTemplates = greetingTemplates;
global.Templates.testTemplates = testTemplates;

var target = $('.test-target');
target.html(greetPerson({ name: 'Matt' }).content);

// this template calls greetings template within it
target.append(Templates.testTemplates.test2().content);