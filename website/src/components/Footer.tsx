import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-muted">
            © {new Date().getFullYear()} Zozalu. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <Link 
            href="https://discord.gg/zoworld" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            Discord
          </Link>
          
          <Link 
            href="https://twitter.com/zoworldxyz" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            Twitter
          </Link>
          
          <Link 
            href="https://zo.xyz" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            Zo.xyz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 