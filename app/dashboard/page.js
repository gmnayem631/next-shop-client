"use client";

import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading></Loading>;
  }

  if (!session) {
    redirect("/login"); // Protect the dashboard
  }

  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle for small screens */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content p-6">
        {/* Page content */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        <h1 className="text-2xl font-bold">Welcome, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a>Dashboard Home</a>
          </li>
          <li>
            <a>Add Items</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
