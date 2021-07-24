import http from "../http-temporada";

class TemporadaDataService {
  getAll() {
   return http.get("/temporada", { crossdomain: true });
    
  }

  get(id) {
    //return http.get(`/temporada/${id}`, { crossdomain: true });
    return http.get("/temporada/" + id, { crossdomain: true });
  }

  create(data) {
    return http.post("/temporada", data);
  }

  update(id, data) {
    return http.put(`/temporada/${id}`, data);
  }

  delete(id) {
    return http.delete(`/temporada/${id}`);
  }

  deleteAll() {
    return http.delete(`/temporada`);
  }

  /*
  findByTitle(title) {
    return http.get(`/song?SongName=${title}`);
  }
  */
}

export default new TemporadaDataService();