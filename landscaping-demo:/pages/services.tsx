import Link from 'next/link';

const services = [
  "Artificial turf installation",
  "Concrete masonry",
  "Driveway landscaping",
  "Garden decorations",
  "Grading & resloping",
  "Hardscapes",
  "Landscape design",
  "Landscape installations",
  "Outdoor steps",
  "Driveway or walkway paving",
  "Retaining walls",
  "Path landscaping",
  "Stonemasonry"
];

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-green-100 to-blue-50 p-6">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Our Landscaping Services</h1>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          {services.map(service => <li key={service} className="text-lg">{service}</li>)}
        </ul>
        <div className="text-center">
          <Link href="/contact" className="text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition">Book a free consultation →</Link>
        </div>
      </div>
    </main>
  );
}