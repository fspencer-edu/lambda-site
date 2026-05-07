import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold">
            FS App
          </Link>

          <nav className="flex gap-6">
            <Link
              to="/"
              className="text-slate-300 transition hover:text-white"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}