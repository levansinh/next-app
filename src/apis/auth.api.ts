import {IGenericResponse} from "@/types/common";
import http from "@/utils/https";

interface ILoginResponse extends IGenericResponse {
  data: {
    authToken: string;
    email: string;
    userId: number;
  };
}

export const authApiRequest = {
  login: (body: {username: string; password: string}) =>
    http.post<ILoginResponse>("auth/login", body),
  auth: (body: {sessionToken: string}) =>
    http.post("api/auth", body, {
      baseUrl: "",
    }),
  logoutClient: () =>
    http.post("api/auth/logout", "", {
      baseUrl: "",
    }),
  logoutServer: () => http.delete("auth/logout"),
};
