"use client";
import { signOut, useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) return <p>Not signed in</p>;

  return (
    <div className="space-y-2">
      <p>Welcome, {session.user.name}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
