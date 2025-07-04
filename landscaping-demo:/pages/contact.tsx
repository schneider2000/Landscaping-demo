import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-green-100 to-blue-50 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Contact & Booking</h1>
        {submitted ? (
          <p className="text-green-700 text-center text-lg">Thank you! We’ll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col">
              Name:
              <input type="text" required className="border rounded px-3 py-2 mt-1"/>
            </label>
            <label className="flex flex-col">
              Email:
              <input type="email" required className="border rounded px-3 py-2 mt-1"/>
            </label>
            <label className="flex flex-col">
              Phone Number:
              <input type="tel" required className="border rounded px-3 py-2 mt-1"/>
            </label>
            <label className="flex flex-col">
              Message / Booking Details:
              <textarea required rows={4} className="border rounded px-3 py-2 mt-1"/>
            </label>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">Send</button>
          </form>
        )}
      </div>
    </main>
  );
}