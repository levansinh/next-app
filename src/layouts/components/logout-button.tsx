"use client";

import {authApiRequest} from "@/apis/auth.api";
import {useRouter} from "next/router";
import nookies from "nookies";
import {toast} from "react-toastify";

function LogoutButton() {
  const router = useRouter();
  async function handleLogout() {
    try {
      await authApiRequest.logoutServer();
      await authApiRequest.logoutClient();
      router.push("/login");
      toast.success("Xoá thành công");
    } catch (error) {
      console.log(error);
    }
  }

  return <div onClick={handleLogout}>Logout</div>;
}

export default LogoutButton;
