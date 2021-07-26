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
          '/time': {
                target: 'https://localhost:44331/br21api', //'http://18.205.226.58/br21api/time',
                secure: true,                
                pathRewrite: {
                    '^/time': ''
                },
                changeOrigin: true
            },
            '/jogo': {
                target: 'https://localhost:44354/br21api',//'http://18.205.226.58:82/br21api',
                secure: true,
                pathRewrite: {
                    '^/jogo': ''
                },
                changeOrigin: true
            },
            '/temporada': {
                target: 'https://localhost:44357/br21api', //'http://ec2-18-205-226-58.compute-1.amazonaws.com:82/br21api',
                secure: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/temporada': ''
                }
            }
        },
    }
}

//ec2-18-205-226-58.compute-1.amazonaws.com
//
//http://18.205.226.58/br21api/time
//http://18.205.226.58:81/br21api/jogo
//http://18.205.226.58:82/br21api/temporada