exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://demo.applitools.com/hackathonV2.html',
      browser: 'chrome'
    },
    ApplitoolsHelper: {
      require: 'codeceptjs-applitoolshelper',
      applitoolsKey: process.env['APPLITOOLS_API'] 
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'applitools-hackathon',
  plugins: {
    wdio: {
        enabled: true,
        services: ['selenium-standalone']
    }
 }
}