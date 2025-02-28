import DetailPageLayout from '@/components/DetailPageLayout';
import Link from 'next/link';

export default function LitepaperPage() {
  return (
    <DetailPageLayout title="Litepaper">
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Our Vision for Decentralized Living</h2>
        <p className="mb-6">
          Zozalu represents a groundbreaking approach to decentralized living and innovation. 
          Our vision is to create self-sustaining communities powered by blockchain technology, 
          fostering collaboration and shared resources.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Beacon Nodes:</strong> Central hubs that provide infrastructure and governance
          </li>
          <li>
            <strong>Lite Nodes:</strong> Community outposts that extend the network reach
          </li>
          <li>
            <strong>Network State:</strong> A digital-first approach to community building
          </li>
          <li>
            <strong>Resource Sharing:</strong> Efficient allocation of assets and tools
          </li>
        </ul>

        <div className="bg-secondary p-6 rounded-lg border border-border mt-8 mb-8">
          <h3 className="text-xl font-semibold mb-3">Download Our Whitepaper</h3>
          <p className="mb-4">
            Get detailed insights into our technology, governance model, and roadmap in our comprehensive whitepaper.
          </p>
          <Link 
            href="/whitepaper.pdf" 
            className="cta-button inline-block"
          >
            Download PDF (Coming Soon)
          </Link>
        </div>

        <h3 className="text-xl font-semibold mb-3">Implementation Timeline</h3>
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>
            <strong>Phase 1 (Current):</strong> Pop-up events and community building
          </li>
          <li>
            <strong>Phase 2 (Q3 2023):</strong> Establishment of first beacon nodes
          </li>
          <li>
            <strong>Phase 3 (Q4 2023):</strong> Lite node network expansion
          </li>
          <li>
            <strong>Phase 4 (2024):</strong> Full decentralized network state
          </li>
        </ol>
      </div>
    </DetailPageLayout>
  );
} 