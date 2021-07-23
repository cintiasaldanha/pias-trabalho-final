import axios from "axios";


export default axios.create({
  baseURL:  "https://arcane-plains-31255.herokuapp.com",

   headers: {
      'Access-Control-Allow-Origin': '*',
      "Content-type": "application/json"
    }   
     
});
