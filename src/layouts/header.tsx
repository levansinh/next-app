import Link from "next/link";

import {authApiRequest} from "@/apis/account.api";
import LogoutButton from "@/layouts/components/logout-button";

async function Header() {
  const a = await authApiRequest.me();

  const {userEmail} = a;

  console.log(userEmail);

  return (
    <div className="h-[46px] w-full bg-black text-white flex items-center px-4 justify-between">
      <div className="flex items-center gap-3">
        <Link href="/snake" className="hover:text-red-300">
          Game rắn săn mồi
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <LogoutButton />
        </>
      </div>
    </div>
  );
}

export default Header;
