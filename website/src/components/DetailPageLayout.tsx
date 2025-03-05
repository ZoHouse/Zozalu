import type { ReactNode } from 'react';

interface DetailPageLayoutProps {
  title: string;
  children: ReactNode;
}

const DetailPageLayout = ({ title, children }: DetailPageLayoutProps) => {
  return (
    <div className="flex flex-col">
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DetailPageLayout; 