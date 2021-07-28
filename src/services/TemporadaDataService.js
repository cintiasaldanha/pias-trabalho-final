import http from "../http-temporada";

class TemporadaDataService {
  
  getAll() {
   return http.get("/temporada", { crossdomain: true });
    
  }

  get(id) {
    return http.get("/temporada/" + id, { crossdomain: true });
  }

  create(data) {
    return http.post("/temporada", data, { crossdomain: true });
  }

  update(id, data) {
    return http.put(`/temporada/${id}`, data, { crossdomain: true });
  }

  delete(id) {
    return http.delete(`/temporada/${id}`, { crossdomain: true });
  }

  deleteAll() {
    return http.delete(`/temporada`, { crossdomain: true });
  }

  /*
  findByTitle(title) {
    return http.get(`/song?SongName=${title}`);
  }
  */
}

export default new TemporadaDataService();