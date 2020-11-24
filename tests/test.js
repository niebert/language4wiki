const jsdom = require('jsdom');
const { JSDOM } = jsdom;

var language4dom = require('../src/main.js');

const vDOM = new JSDOM(`<!DOCTYPE html>
<html>
  <body>
    <textarea id="mytxtfile" row="5" cols="80"></textarea>
    <select id="myselid" >
    </select>
  <body>
</html>`);

// create a reference for the window.document
var doc = vDOM.window.document;

// the following function shows the DOM content in console.log()
function show_DOM() {
  console.log('DOM Output:\n' + vDOM.serialize(doc));
}

// show the generated DOM tree as HTML by serialization
show_DOM();
console.log("CALL: function");
// add options to select
console.log("CALL: init() finished");

setTimeout(show_DOM,2000);
