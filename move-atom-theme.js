'use strict';

var fs = require( 'fs-extra' );

fs.remove( './index.less', function indexRemoved( err ) {
    if ( err ) throw err;

    fs.move( './polymer-theme/index.less', './index.less', function indexDone( err ) {
        if ( err ) throw err;
    })
});

fs.remove( './styles', function stylesCleared( err ){
    if ( err ) throw err

    fs.move( './polymer-theme/styles', './styles', function stylesDone( err ) {
        if ( err ) throw err;
    })
})