import Link from 'next/link';

const CareerItem = ({ title, department }: { title: string, department: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-gray-700">
    <Link href="#" className="text-lg text-white hover:text-blue-400 underline">
      {title}
    </Link>
    <span className="text-gray-400">{department}</span>
  </div>
);

const CareersSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Careers</h2>
        <div className="space-y-4">
          <CareerItem title="Research Engineer" department="Research" />
          <CareerItem title="Software Engineer" department="Engineering" />
          <CareerItem title="Design Engineer" department="Product" />
        </div>
        <p className="mt-8 text-gray-300">
          Please email evidence of exceptional ability to{' '}
          <Link href="mailto:hiring@timepilot.com" className="text-blue-400 hover:underline">
            chandana@timepilot.com
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default CareersSection;