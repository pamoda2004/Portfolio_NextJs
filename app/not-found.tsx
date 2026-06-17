import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 pt-24">
      <div className="max-w-2xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
          /404
        </p>

        <h1 className="text-7xl font-black uppercase tracking-[-0.06em] md:text-9xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-neutral-600">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}