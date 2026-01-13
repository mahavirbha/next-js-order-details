import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h1>
        <p className="text-gray-600 mb-6">The order you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/order1" 
          className="text-purple-600 hover:text-purple-800 font-medium"
        >
          ← Go to Order 1
        </Link>
      </div>
    </div>
  );
}
