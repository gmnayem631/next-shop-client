"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Loading from "./Loading";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="navbar max-w-7xl mx-auto">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {session && (
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          NextShop
        </Link>
      </div>

      {/* Middle nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {session && (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        {status === "loading" ? (
          <Loading></Loading>
        ) : session ? (
          <>
            {/* Profile picture */}
            <img
              src={session.user?.image}
              alt={session.user?.name || "User Avatar"}
              className="w-8 h-8 rounded-full"
            />

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-2 btn btn-error rounded-lg text-white"
            >
              <BiLogOut />
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 font-bold px-4 py-2 btn-outline rounded-lg shadow-md text-white 
             bg-[#00BDAA] transition-colors duration-300"
          >
            <MdOutlinePeopleAlt />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
