import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-blue-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">GreenScape Landscaping Milton Keynes</h1>
        <p className="text-lg mb-8">Your dream garden starts here. We provide a full range of landscaping services for every season.</p>
        <nav>
          <ul className="flex flex-col md:flex-row justify-center gap-4">
            <li>
              <Link href="/services" className="text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition">Services</Link>
            </li>
            <li>
              <Link href="/gallery" className="text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition">Contact & Booking</Link>
            </li>
            <li>
              <Link href="/joke" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition">Random Joke</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}