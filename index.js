var $ = require('jquery');
var greetingTemplates = require('./templates/greetings.soy');
var testTemplates = require('./templates/test.soy');
var greetPerson = require('./templates/greetings.soy').hello;
var Templates = combineTemplates([
    { name: 'greetingsTemplates', template: greetingTemplates },
    { name: 'testTemplate', template: testTemplates }
]);
console.log(Templates);

var target = $('.test-target');
console.log(greetPerson({ name: 'Matt' }));
target.html(greetPerson({ name: 'Matt' }).content);

function combineTemplates(templatesArray) {
    var rtn = {};
    templatesArray.forEach(function(template) {
        rtn[template.name] = template.template;
    });
    return rtn;
}