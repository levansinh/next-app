import {IGenericResponse} from "@/types/common";
import {IUser} from "@/types/user";
import http from "@/utils/https";
import {useQuery} from "@tanstack/react-query";

interface IFetchUserResponse extends IGenericResponse {
  data: IUser;
}

const fetchUser = async () => {
  const res = await http.get<IFetchUserResponse>("auth/user-profile");
  return res.data;
};

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["fetch-user"],
    queryFn: fetchUser,
  });
};
