import axios from "axios";


const getToken = () =>{
  return `Bearer ${localStorage.getItem('token')}`;
}

const executeRequest = async (options, successCallback, errorCallback) => {
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export default axios.create({
  baseURL: "https://boiling-journey-65976.herokuapp.com/api/v1/producto",
  headers: {
    "Content-type": "application/json",
      Authorization: getToken(),
  }
});



export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: '',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}
