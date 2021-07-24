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
          '/times': {
                target: 'http://18.205.226.58/br21api/time',
                changeOrigin: true,
                pathRewrite: {
                    '^/times': ''
                }
            },
            '/jogos': {
                target: 'http://18.205.226.58:82/br21api',
                changeOrigin: true,
                pathRewrite: {
                    '^/jogos': ''
                }
            },
            '/temporada': {
                target: 'http://18.205.226.58:82/br21api',
                changeOrigin: true,
                pathRewrite: {
                    '^/temporada': ''
                }
            }
        },
    }
}

//http://18.205.226.58/br21api/time
//http://18.205.226.58:81/br21api/jogo
//http://18.205.226.58:82/br21api/temporada