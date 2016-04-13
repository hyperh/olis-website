module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react', 'stage-0'],
      pattern: /\.(es6|jsx|js)$/
    },
    postcss: {
      processors: [
        require('autoprefixer')(['> 1%'])
      ]
    }
  }
};
