import http from "../http-jogo";

class JogoDataService {
  getAll() {
   return http.get("/jogo", { crossdomain: true });
    
  }

  get(id) {
   return http.get("/jogo/" + id, { crossdomain: true });
  }

  getByTemporadaRodada(idTemp,idRod, id) {
    return http.get("/jogo/" + idTemp + "/" +idRod + "/" + id, { crossdomain: true });
   }

  create(data) {
    return http.post("/jogo", data, { crossdomain: true });
  }

  update(id, data) {
    return http.put(`/jogo/${id}`, data, { crossdomain: true });
  }

  delete(id) {
    return http.delete(`/jogo/${id}`, { crossdomain: true });
  }

  deleteAll() {
    return http.delete(`/jogo`, { crossdomain: true });
  }
/*
  findByTitle(title) {
    return http.get(`/jogos?dscTime=${title}`);
  }
*/  
}

export default new JogoDataService();