export const apiUrl = 'https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all';

const responseBody = response => response.json();
const handleErrors = error => error;

const api = {
  getAllProductsApi: () => (
    fetch(apiUrl)
      .catch(handleErrors)
      .then(responseBody)
  ),
};

export default api;