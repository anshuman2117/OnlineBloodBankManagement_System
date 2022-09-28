import axios from "axios";


// export default axios.create({
//   baseURL: 'http://localhost:8080',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
export const BASE_URL = "http://localhost:8080";

export const Myaxios = axios.create({
  baseURL: BASE_URL,
});


let response
export const fetch = (method, url, data, headers = {}, params = {}) => {
  if (
    method === "GET" ||
    method === "get" ||
    method === "delete" ||
    method === "DELETE"
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        response = await axios({
          method: method,
          url: url,
          headers: headers,
          params: params,
        });
        resolve(response);
      } catch (err) {
        if (err.response.status === 401) {
          // toasts.error("Session expire");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          reject(err);
        }
      }
    });
  } else if (
    method === "POST" ||
    method === "post" ||
    method === "PUT" ||
    method === "put"
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        response = await axios({
          method: method,
          headers: headers,
          url: url,
          data: data,
          params:params,
        });
        resolve(response);
      } catch (err) {
        if (err.response.status === 401) {
          // toasts.error("Session expire");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          reject(err);
        }
      }
    });
  }


}

const setItem = (key,value) =>{
  localStorage.setItem(key,JSON.stringify(value))
}

const getItem=(key)=>{
  return JSON.parse(localStorage.getItem(key))
}

const removeItem=(key)=>{
localStorage.removeItem(key)
}

export const storageItem={
  setItem,
  getItem,
  removeItem
}
