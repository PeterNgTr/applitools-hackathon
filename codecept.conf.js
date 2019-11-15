if (!process.env['TARGET_URL'] || process.env['TARGET_URL'] === '') {
  process.env['TARGET_URL'] = 'https://demo.applitools.com/hackathonV2.html';
}

exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: process.env['TARGET_URL'],
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