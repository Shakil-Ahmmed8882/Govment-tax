const BASE_URL = "http://localhost:5000"




export const getData = async (endpoint) => {
  return fetch(BASE_URL + endpoint)
    .then((res) => res.json())
    .then((data) => data);
};

export const modifyData = async (endpoint, method, data) => {
  return fetch(BASE_URL + endpoint, {
    method,
    headers: "application/json",
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => data);
};



export default BASE_URL