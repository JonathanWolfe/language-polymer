'use strict';

var fs = require( 'fs-extra' );
var cson = require( 'cson-parser' );

var contents = fs.readFileSync( './grammars/polymer.cson', { encoding: 'utf8' } );
var replaced = contents.replace( /meta\./gmi, '' );
var parsed = cson.parse( replaced );

fs.emptyDirSync( './syntaxes' );
fs.writeFileSync( './syntaxes/polymer.json', JSON.stringify( parsed, null, '\t' ) );
