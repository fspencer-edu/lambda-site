export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-5xl font-bold">
        Welcome to Lambda 
      </h1>

      <p className="max-w-2xl text-lg text-slate-300">
        React + Vite + Tailwind + Express backend setup.
      </p>

      <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
        Get Started
      </button>
    </section>
  );
}