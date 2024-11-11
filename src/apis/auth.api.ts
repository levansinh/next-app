import {IAuthen} from "@/types/auth";
import {IGenericResponse} from "@/types/common";
import http from "@/utils/https";
import {QueryClient, useMutation} from "@tanstack/react-query";

interface ILoginResponse extends IGenericResponse {
  data: {
    nonFieldErrors: string[];
    authToken: string;
    email: string;
    userId: number;
  };
}

const login = async (payload: IAuthen) => {
  const res = await http.post<ILoginResponse>("auth/login", payload);
  return res.data;
};

export const useMutateLogin = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: login,
  });
};
