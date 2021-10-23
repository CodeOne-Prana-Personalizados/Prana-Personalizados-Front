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

  deleteVentas(id_venta) {
    return http.delete(`/ventas?id=${id_venta}`, {data:{id_venta: id_venta}});
  }

}

export default new Ventas();

