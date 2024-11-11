import LogoutButton from "@/layouts/components/logout-button";
import Link from "next/link";

function Header() {
  return (
    <div className="h-[46px] w-full bg-black text-white flex items-center px-4 justify-between">
      <div className="flex items-center gap-3">
        <Link href="/">1</Link>
        <Link href="/">2</Link>
        <Link href="/">3</Link>
        <Link href="/">4</Link>
        <Link href="/">5</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <LogoutButton />
      </div>
    </div>
  );
}

export default Header;
