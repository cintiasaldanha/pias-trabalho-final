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
                target: 'http://ec2-18-205-226-58.compute-1.amazonaws.com/br21api', //'https://localhost:44331/br21api', //'http://18.205.226.58/br21api/time',
                //secure: true,                
                pathRewrite: {
                    '^/time': ''
                },
                changeOrigin: true
            },
            '/jogo': {
                target: 'http://ec2-18-205-226-58.compute-1.amazonaws.com:81/br21api', //'https://localhost:44354/br21api',//'http://18.205.226.58:82/br21api',
                //secure: true,
                pathRewrite: {
                    '^/jogo': ''
                },
                changeOrigin: true
            },
            '/temporada': {
                target: 'http://ec2-18-205-226-58.compute-1.amazonaws.com:82/br21api',//'https://localhost:44357/br21api', //'http://ec2-18-205-226-58.compute-1.amazonaws.com:82/br21api',
                //secure: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/temporada': ''
                }
            }
        }
    },
    /*publicPath: process.env.NODE_ENV === 'production'
    ? '/your/path/to/dist/'
    : '/'*/
}


//ec2-18-205-226-58.compute-1.amazonaws.com
//
//http://18.205.226.58/br21api/time
//http://18.205.226.58:81/br21api/jogo
//http://18.205.226.58:82/br21api/temporada