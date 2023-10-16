module.exports = {
    spec: './specs/*.spec.js',
    require: "chai/register-expect.js",
    reporter: 'mocha-junit-reporter',
    reporterOptions: [
        'mochaFile=./reports/results.xml'
    ]
}