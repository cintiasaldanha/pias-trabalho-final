import http from "../http-temporada";

class TemporadaDataService {
  
replacer(key, value) {
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  }
  
  
  getAll() {
   return http.get("/temporada", { crossdomain: true });
    
  }

  get(id) {
    //return http.get(`/temporada/${id}`, { crossdomain: true });
    //var res =  http.get("/temporada/" + id, { crossdomain: true });
    //return JSON.stringify(res);
    return http.get("/temporada/" + id, { crossdomain: true });
  }

  create(data) {
    
    window.alert(JSON.stringify(data));

    return http.post("/temporada", JSON.stringify(data), { crossdomain: true });
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