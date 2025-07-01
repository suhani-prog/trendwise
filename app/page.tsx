import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">TrendWise</h1>
      {session ? (
        <p>Welcome, {session.user?.name}!</p>
      ) : (
        <Link href="/api/auth/signin" className="text-blue-500">Login with Google</Link>
      )}
      <p>This is a test homepage.</p>
    </div>
  );
}