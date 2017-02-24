'use strict';

var fs = require( 'fs-extra' );
var cson = require( 'cson-parser' );

var contents = fs.readFileSync( './syntaxes/polymer.json', { encoding: 'utf8' });
var csonString = cson.stringify( JSON.parse( contents ), null, 2 );

fs.emptyDirSync( './grammars' );
fs.writeFileSync( './grammars/polymer.cson', csonString );
