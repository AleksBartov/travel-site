var $ = require('jquery');
var Person = require('./modules/Person');

alert('testing 12345678910');

var john = new Person("Sasha Bartov", "red");
john.greet();

$('h1').hide();
