'use strict';

var fs = require( 'fs-extra' );

fs.move( './polymer-theme/index.less', './index.less', { overwrite: true }, function indexDone( err ) {
    if ( err ) throw err;

    fs.move( './polymer-theme/styles', './styles', { overwrite: true }, function stylesDone( err ) {
        if ( err ) throw err;

        console.log( 'Done moving files' );
    })
})