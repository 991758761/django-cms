'use strict';

// #############################################################################
// User logout

var globals = require('./settings/globals');
var messages = require('./settings/messages').logout;

casper.test.begin('User Logout', function (test) {
    casper
        .start(globals.editUrl)
        .waitUntilVisible('.cms-toolbar-expanded', function () {
            this.click('.cms-toolbar-item-navigation li:first-child a');
        })
        .waitForSelector('.cms-toolbar-item-navigation-hover', function () {
            this.click('.cms-toolbar-item-navigation-hover a[href$="/admin/logout/"]');
        })
        .waitForSelector('.nav', function () {
            test.assertDoesntExist('.cms-toolbar', messages.logoutOk);
        })
        .run(function () {
            test.done();
        });
});
