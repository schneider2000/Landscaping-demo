import Link from 'next/link';

export default function Gallery() {
  const images = [
    "https://placehold.co/400x300?text=Garden+Makeover",
    "https://placehold.co/400x300?text=Driveway+Paving",
    "https://placehold.co/400x300?text=Retaining+Wall"
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-green-100 to-blue-50 p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Our Work Gallery</h1>
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Landscaping project ${idx + 1}`} width={300} height={200}
              className="rounded-lg shadow-md border border-gray-200"/>
          ))}
        </div>
        <p className="text-center">See more or <Link href="/contact" className="text-green-700 underline">request a quote</Link>.</p>
      </div>
    </main>
  );
}