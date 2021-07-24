import http from "../http-times";

class TimesDataService {
  getClassificacao(idTemporada){
    return http.get("/classificacao/" + idTemporada, { crossdomain: true });
  }
  
  getAll() {
   return http.get("/times", { crossdomain: true });
    
  }

  get(id) {
    return http.get("/times/" + id, { crossdomain: true });
  }

  create(data) {
    return http.post("/times", data);
  }

  update(id, data) {
    return http.put(`/times/${id}`, data);
  }

  delete(id) {
    return http.delete(`/times/${id}`);
  }

  deleteAll() {
    return http.delete(`/times`);
  }
/*
  findByTitle(title) {
    return http.get(`/times?dscTime=${title}`);
  }
*/  
}

export default new TimesDataService();