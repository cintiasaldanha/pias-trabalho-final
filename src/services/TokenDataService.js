import http from "../http-common";

class SongDataService {
  getAll() {
   return http.get("/song", { crossdomain: true });
    
  }

  get(id) {
    //return http.get(`/song/${id}`, { crossdomain: true });
    return http.get("/song/" + id, { crossdomain: true });
  }

  create(data) {
    return http.post("/song", data);
  }

  update(id, data) {
    return http.put(`/song/${id}`, data);
  }

  delete(id) {
    return http.delete(`/song/${id}`);
  }

  deleteAll() {
    return http.delete(`/song`);
  }

  findByTitle(title) {
    return http.get(`/song?SongName=${title}`);
  }
}

export default new SongDataService();