import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === "development"
      ? "http://localhost:3333/"
      : "https://my-json-server.typicode.com/SevenPD/Server", // seu link aqui dentro das aspas
  });