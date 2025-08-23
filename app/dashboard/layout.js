"use client";

import LoadingCenter from "@/components/LoadingCenter";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingCenter />;
  }

  if (!session) {
    redirect("/login"); // Protect dashboard routes
  }

  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle for small screens */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content p-6">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden mb-4"
        >
          Open drawer
        </label>

        {/* This is where child pages (dashboard, addItem, etc.) will show */}
        {children}
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <Link href="/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link href="/dashboard/addItem">Add Items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
