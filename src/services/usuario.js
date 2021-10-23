import http from "../http-common";


class Usuarios {
  getAll(page = 0) {
    return http.get("/usuarios");
  }

  createUsuario(data) {
    return http.post("/usuarios", data);
  }

  updateUsuario(data) {
    return http.put("/usuarios", data);
  }

  deleteUsuario(id_usuario) {
    return http.delete(`/usuarios?id=${id_usuario}`, {data:{id_usuario: id_usuario}});
  }

}

export default new Usuarios();

