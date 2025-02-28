import Link from 'next/link';
import type { ReactNode } from 'react';

interface DetailPageLayoutProps {
  title: string;
  children: ReactNode;
}

const DetailPageLayout = ({ title, children }: DetailPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 border-b border-border sticky top-0 bg-background/90 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Zozalu</Link>
          <Link href="/" className="text-muted hover:text-primary transition-colors">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Back
            </span>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>
          {children}
        </div>
      </main>
      
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted">
          <p>© {new Date().getFullYear()} Zozalu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DetailPageLayout; 