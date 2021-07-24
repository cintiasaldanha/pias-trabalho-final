import http from "../http-jogos";

class JogosDataService {
  getAll() {
   return http.get("/jogos", { crossdomain: true });
    
  }

  get(id) {
   return http.get("/jogos/" + id, { crossdomain: true });
  }

  create(data) {
    return http.post("/jogos", data);
  }

  update(id, data) {
    return http.put(`/jogos/${id}`, data);
  }

  delete(id) {
    return http.jogos(`/song/${id}`);
  }

  deleteAll() {
    return http.jogos(`/song`);
  }
/*
  findByTitle(title) {
    return http.get(`/jogos?dscTime=${title}`);
  }
*/  
}

export default new JogosDataService();