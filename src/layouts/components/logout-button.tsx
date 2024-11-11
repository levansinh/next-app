"use client";

import nookies from "nookies";
import {toast} from "react-toastify";

function LogoutButton() {
  const handleDeleteCookie = () => {
    nookies.set(null, "sessionToken", "", {
      maxAge: 30 * 24 * 60 * 60, // 30 ngày
      path: "/",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
    });
    toast.success("Cookie đã được xóa!");
  };

  return <div onClick={handleDeleteCookie}>Logout</div>;
}

export default LogoutButton;
