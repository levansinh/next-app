import {cookies} from "next/headers";

export const setToken = async (token: string) => {
  cookies().set("token", token, {
    path: "/",
    domain: "localhost",
    maxAge: 300,
    httpOnly: true,
    secure: false,
  });
};
