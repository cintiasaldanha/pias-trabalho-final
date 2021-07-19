module.exports = {
  devServer:{
      proxy: {
          '/song': {
              target: 'https://arcane-plains-31255.herokuapp.com',
              changeOrigin: true,
              pathRewrite: {
                  '^/song': ''
              }
          },
          '/token': {
            target: 'https://arcane-plains-31255.herokuapp.com',
            changeOrigin: true,
            pathRewrite: {
                '^/token': ''
            }
        },
      },
  }
}
