# Language4Wiki
This package provides supports for language Javascript handling of AppLSACs for MediaWikis learning resources (see [Wikiversity](https://en.wikiversity.org)). The repository contains JSON data structures for  creating of language support for [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC) tools of learning resources. The provided package is used e.g. for language specific select boxes in HTML.


## Example AppLSACs
* [Wikipedia2Wikiversity](https://niebert.github.io/Wikipedia2Wikiversity)
* [Wiki2Reveal](https://niebert.github.io/Wiki2Reveal) - create online presentation on-the-fly from Wikiversity learning resources (see https://en.wikiversity.org/wiki/Wiki2Reveal)

## Installation
Assuming you have already created a repository for you project and you want to use `language4wiki` in that project within your [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC)
```javascript
npm install language4wiki --save
```

If you just want to use the package in your script install

```javascript
npm install language4wiki
```
If you want to install that just for building your [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC) without using it in your WebApp that install
```javascript
npm install language4wiki --save-dev
```

## Usage
The package contains the
```javascript
var l4w = require("language4wiki");

console.log(l4w.languages);
/*
will output
    {
        "text": "English",
        "value": "en"
    },
    {
        "text": "Spanish",
        "value": "es"
    },
    {
        "text": "German",
        "value": "de"
    },
    ...
}    
to the console */
```

Assume you want to create the options for a HTML select box with node you can create the code like this:
```javascript
var langs = require("language4wiki").languages;
var html = "<select id='myselectbox'>"
for (var i = 0; i < langs.length; i++) {
  html += "\n  <option value='" + langs[i].value + "'>";
  html += "\n    " + langs[i].text
  html +) "\n  </option>";
}
html += "\n</select>";


console.log("SELECT-BOX: \n" + html);
```
