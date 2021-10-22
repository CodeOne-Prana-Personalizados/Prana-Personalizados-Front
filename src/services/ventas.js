import http from "../http-common";


class Ventas {
  getAll(page = 0) {
    return http.get("/ventas");
  }

  createVentas(data) {
    return http.post("/ventas", data);
  }

  updateVentas(data) {
    return http.put("/ventas", data);
  }

  deleteVentas(id_ventas) {
    return http.delete(`/ventas?id=${id_ventas}`, {data:{id_ventas: id_ventas}});
  }

}

export default new Ventas();

