const through = require('through2');

module.exports = {
  // bundler: 'webpack', // default: 'browserify'
  // input: 'src/index.js',
  // output: {
  //   path: 'dist',
  // },
  // server: {
  //   port: 9000,
  // },
  cliOptions: {
    src: './src/index.ts',
    port: 8000,
  },
  bundlerCustomizer: (bundler) => {
    bundler.transform(function () {
      let data = '';
      return through(
        function (buffer, _encoding, callback) {
          data += buffer;
          callback();
        },
        function (callback) {
          this.push("globalThis.Buffer = require('buffer/').Buffer;");
          this.push(data);
          callback();
        },
      );
    });
  },
};
