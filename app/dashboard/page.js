"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashboardHome() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      {/* Welcome card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {session?.user?.name} 👋
        </h1>
        <p className="text-gray-600 mb-4">Email: {session?.user?.email}</p>
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-20 h-20 rounded-full shadow-md"
          />
        )}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/dashboard/addItem"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md text-center transition-colors"
        >
          Add Item
        </Link>

        <Link
          href="/products"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md text-center transition-colors"
        >
          All Products
        </Link>
      </div>

      {/* Info Section */}
      <div className="bg-base-100 p-4 rounded-lg shadow-inner text-gray-700">
        <p>
          Here’s your dashboard overview. You can add new items, manage existing
          ones, and update your profile settings. The sidebar on the left lets
          you navigate quickly.
        </p>
      </div>
    </div>
  );
}
