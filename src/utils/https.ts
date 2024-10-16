import axios, {AxiosInstance} from "axios";

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "",
      timeout: 10000,
      headers: {"Content-Type": "application/json"},
    });

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
