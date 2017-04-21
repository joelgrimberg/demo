exports.config = {
  "helpers": {
    "WebDriverIO": {
      // load variables from the environment and provide defaults
      "url": 'https://www.google.nl',
      "browser" : process.profile || "phantomjs",
      "restart" : "false"
    }
  },
  "tests": "./testcases/*_test.js",
  "timeout": 120000,
  "output": "./output",
  "include": {
    "I": "./steps_file.js"
  },
  "multiple": {
    "basic":{
      "grep": 'DUI',
      "browsers" :
      [
        //{browser: 'chrome', windowSize: 'maximize'},
        {browser: 'chrome', windowSize: '1220x1000'},
        {browser: 'chrome', windowSize: '1024x1000'},
        {browser: 'chrome', windowSize: '768x1000'},
        {browser: 'chrome', windowSize: '320x1000'},

        {browser: 'firefox', windowSize: 'maximize'},
        {browser: 'firefox', windowSize: '1220x1000'},
        {browser: 'firefox', windowSize: '1024x1000'},
        {browser: 'firefox', windowSize: '768x1000'},
        {browser: 'firefox', windowSize: '320x1000'},

        {browser: 'safari', windowSize: 'maximize'},
        {browser: 'safari', windowSize: '1220x1000'},
        {browser: 'safari', windowSize: '1024x1000'},
        {browser: 'safari', windowSize: '768x1000'},
        {browser: 'safari', windowSize: '320x1000'}
    ]
  }
   ,
    "smoke": {
      // run only tests containing "@smoke" in name
      "grep": '@smoke',

      // use firefox and different chrome configurations
      "browsers": [
        'firefox',
        {browser: 'chrome', windowSize: 'maximize'},
        // replace any config values from WebDriverIO helper

        {browser: 'safari', windowSize: '1220x1000'},
        {browser: 'safari', windowSize: '1024x1000'},
        {browser: 'safari', windowSize: '768x1000'},
        {browser: 'sfari', windowSize: '320x1000'}

        ]
    }
},

  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
      "mochaFile": "output/result.xml",
      "reportDir": "output",
      "reportFilename": "check",
      "enableCharts": true,
      "autoOpen": true,
      "quiet": true,
      "inlineAssets": true
    }
  }
};
