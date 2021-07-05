import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gorgeous-badlands-30514.herokuapp.com/api',
});
