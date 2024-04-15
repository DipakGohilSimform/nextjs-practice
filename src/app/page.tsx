import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <h1 className="text-3xl">Reactjs Practice Home Page</h1>
      <div className="flex gap-3">
        <Link href="/admin">Admin</Link>
        <Link href="/student">Student</Link>
        <Link href="/staff">Staff</Link>
      </div>
    </main>
  );
}
