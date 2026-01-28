import BookingForm from "@/components/BookingForm";
import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-background to-background -z-10" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointing-events-none" />

      {/* Navigation (Simple) */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          KSRTC
        </Link>
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
          Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-4">
            Where to next?
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Choose from thousands of routes and premium operators for your next journey.
          </p>
        </div>

        <BookingForm />
      </div>

      {/* Footer / Info */}
      <footer className="w-full py-6 text-center text-sm text-gray-600">
        &copy; 2026 BusApp Inc. All rights reserved.
      </footer>
    </main>
  );
}
