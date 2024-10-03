'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('User registered successfully!');
        setFormData({ name: '', email: '' });
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage('Something went wrong!');
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Productivity?</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Join The Waitlist
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </section>
  );
};

export default Form;
