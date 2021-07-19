import http from "../http-common";

class SongDataService {
  getAll() {
   return http.get("/song", { crossdomain: true });
    
  }

  get(id) {
    return http.get(`/song/${id}`);
  }

  create(data) {
    var body = '{"username": "dean",  "role": "admin"}';
    var token = http.post("/token", body);

    console.log(token);

    window.alert(token);

    return http.post("/song", data, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    //return http.post("/song", data);
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