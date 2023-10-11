const {Before} = require('@wdio/cucumber-framework');

Before({name: 'console log', tags: '@wikiTestSuite'}, () => {
    return console.log('Running Wiki Test Suite');
});
