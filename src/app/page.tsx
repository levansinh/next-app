"use client";

import {useFetchUser} from "@/apis/account.api";
import {sessionToken} from "@/utils/https";
import Image from "next/image";

export default function Home() {
  const {data: dataUser} = useFetchUser();

  console.log(sessionToken.value, "sessionToken");

  console.log(dataUser, "dataUser");

  return <div>oke</div>;
}
