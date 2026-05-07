import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-blue-500">
        404
      </h1>

      <p className="mt-4 text-xl text-slate-300">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
      >
        Go Home
      </Link>
    </div>
  );
}