var $ = require('jquery');

// requiring the whole file returns an object with functions for each
// template in the file
var greetingTemplates = require('./templates/greetings.soy');
var testTemplates = require('./templates/test.soy');

// can also require individual templates directly
var greetPerson = require('./templates/greetings.soy').hello;

// an idea to combine templates (e.g for our knockout templates)
// so that if templates look for something like Templates.Send.Messages it will find them
function combineTemplates(templatesArray) {
    var rtn = {};
    templatesArray.forEach(function(template) {
        rtn[template.name] = template.template;
    });
    return rtn;
}
global.Templates = combineTemplates([
    { name: 'greetingsTemplates', template: greetingTemplates },
    { name: 'testTemplate', template: testTemplates }
]);

var target = $('.test-target');
console.log(greetPerson({ name: 'Matt' }));
target.html(greetPerson({ name: 'Matt' }).content);

// sample for how to possible call templates from other files
console.log(Templates.testTemplate.test2());
target.append(Templates.testTemplate.test2().content);