import Axios from 'axios';

export const fetchStocks = async token => {
  const {data} = await Axios.get(`${import.meta.env.VITE_SERVER_STOCK_URL}`, {
    headers: {Authorization: `Bearer ${token}`}
  });
  return data;
};

export const fetchSingleStock = async ({id, token}) => {
  const {data} = await Axios.get(
    `${import.meta.env.VITE_SERVER_STOCK_URL}/${id}`,
    {headers: {Authorization: `Bearer ${token}`}}
  );
  return data;
};

export const createStock = async ({stock, token}) => {
  const {data} = await Axios.post(
    `${import.meta.env.VITE_SERVER_STOCK_URL}`,
    stock,
    {headers: {Authorization: `Bearer ${token}`}}
  );
  return data;
};

export const deleteStock = async ({id, token}) => {
  const {data} = await Axios.delete(
    `${import.meta.env.VITE_SERVER_STOCK_URL}/${id}`,
    {headers: {Authorization: `Bearer ${token}`}}
  );
  return data;
};

export const updateStock = async ({stock, id, token}) => {
  const {data} = await Axios.patch(
    `${import.meta.env.VITE_SERVER_STOCK_URL}/${id}`,
    stock,
    {headers: {Authorization: `Bearer ${token}`}}
  );
  return data;
};
