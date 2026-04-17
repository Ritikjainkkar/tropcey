import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 font-sans">
      <p className="text-[10rem] md:text-[16rem] font-black leading-none text-gray-100 select-none tracking-tighter">
        404
      </p>

      {/* Message */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 text-center">
        Page Not Found
      </h1>
      <p className="text-gray-500 text-base text-center max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Back home button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
