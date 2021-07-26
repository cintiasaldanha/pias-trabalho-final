import axios from "axios";


export default axios.create({
  baseURL:  "https://localhost:44354/br21api", //"http://18.205.226.58:81/br21api",  

   headers: {
      'Access-Control-Allow-Origin': '*',
      "Content-type": "application/json"
    } 
     
});

//http://18.205.226.58/br21api/time
//http://18.205.226.58:81/br21api/jogo
//http://18.205.226.58:82/br21api/temporada