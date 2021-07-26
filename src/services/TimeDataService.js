import http from "../http-time";

class TimeDataService {
  getClassificacao(idTemporada){
    return http.get("/classificacao/" + idTemporada, { crossdomain: true });
  }
  
  getAll() {
   return http.get("/time", { crossdomain: true });
    
  }

  get(id) {
    return http.get("/time/" + id, { crossdomain: true });
  }

  create(data) {
    return http.post("/time", data);
  }

  update(id, data) {
    return http.put(`/time/${id}`, data);
  }

  delete(id) {
    return http.delete(`/time/${id}`);
  }

  deleteAll() {
    return http.delete(`/time`);
  }
/*
  findByTitle(title) {
    return http.get(`/time?dscTime=${title}`);
  }
*/  
}

export default new TimeDataService();