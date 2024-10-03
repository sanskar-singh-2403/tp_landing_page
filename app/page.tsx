import Image from 'next/image';
import CareersSection from './components/CarrerSection';
import Form from './components/Form';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/space-background.jpg"
            alt="Futuristic landscape with planets"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4">TimePilot</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Enhancing human productivity in an AI-augmented world.
            </p>
          </div>
        </section>

        {/* About TimePilot Section */}
        <section className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">About TimePilot</h2>
          <p className="text-lg mb-6">
            In a world where artificial intelligence is rapidly transforming the way we work, TimePilot stands at the forefront of enhancing human productivity. Our vision is to create a harmonious relationship between humans and technology, enabling people to thrive in an AI-augmented world.
          </p>
          <p className="text-lg mb-6">
            TimePilot is designed to enhance productivity in the digital age. Our solutions reduce distractions from social media and entertainment, streamline work schedules for better efficiency, and promote a balanced digital lifestyle. Additionally, we utilize AI to offer insightful retrospectives, essential for thriving in an AI-dominated workforce, helping users maintain a competitive edge in their careers.
          </p>
        </section>

        {/* Our Commitment Section */}
        <section className="max-w-3xl mx-auto px-4 py-16 text-center bg-gray-800">
          <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
          <p className="text-lg mb-6">
            At TimePilot, we are committed to delivering tools that are not just technologically advanced but also human-centric. We stand by our promise to provide solutions that are intuitive, effective, and in tune with the needs of a dynamic workforce.
          </p>
          <p className="text-lg mb-6">
            Join TimePilot in redefining productivity. Together, let&rsquo;s navigate the challenges of the digital age and turn time into your most valuable ally.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-16 text-center">
          <CareersSection />
        </section>

        {/* Call to Action Section */}
        <Form />
      </main>

      <footer className="py-4 text-center text-sm text-gray-400">
        <p>© 2024 TimePilot. All rights reserved.</p>
      </footer>
    </div>
  );
}
