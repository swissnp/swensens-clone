import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header
      className="z-50 fixed flex h-16 w-full flex-none bg-white py-0 pr-0 pl-6 font-kanit font-light text-neutral-500"
      id="header"
    >
      <div className=" my-0 mr-6 ml-0 flex h-full items-center bg-none font-kanit font-light text-neutral-500">
        <Link href="/">
          <img
            src="/swensens-logo.svg"
            alt="Logo"
            className="m-auto block w-24 cursor-pointer font-kanit font-light text-red-600"
          />
        </Link>
      </div>
      <div className="ml-auto inline-flex items-center font-kanit font-light text-neutral-500">
        {session ? (
          <div className="relative mr-6 block cursor-pointer whitespace-nowrap py-0 px-6 text-left font-kanit text-lg font-light text-neutral-500 hover:bg-transparent hover:text-red-600">
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <div className="flex whitespace-nowrap">
            <Link className="relative mr-6 block cursor-pointer whitespace-nowrap py-0 px-6 text-left font-kanit text-lg font-light text-neutral-500 hover:bg-transparent hover:text-red-600"
            href={'/register'}>
              Register
            </Link>
            <Link className="relative mr-6 block cursor-pointer whitespace-nowrap py-0 px-6 text-left font-kanit text-lg font-light text-neutral-500 hover:bg-transparent hover:text-red-600"
            href={'/login'}>
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
