import axios from "axios";


export default axios.create({
  baseURL: 'https://localhost:44357/br21api',// "http://ec2-18-205-226-58.compute-1.amazonaws.com:82/br21api",  

   headers: {
      'Access-Control-Allow-Origin': '*',
      "Content-type": "application/json"
    } 
     
});

//http://18.205.226.58/br21api/time
//http://18.205.226.58:81/br21api/jogo
//http://18.205.226.58:82/br21api/temporada