import axios from "axios";

const urlPrueba = "https://stunning-potato-qw4v5qwwr9xf695v-8000.app.github.dev"

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  // baseURL: urlPrueba,
});

export default API