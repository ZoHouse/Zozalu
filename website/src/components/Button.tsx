import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

// Update the ButtonLinkProps interface to be compatible with Next.js Link
interface ButtonLinkProps {
  href: string;
  external?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  // Add any other props needed, but avoid extending from ButtonProps
}

const getVariantClasses = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-black hover:bg-primary-hover shadow-neon-green hover:shadow-lg transition-all duration-200';
    case 'secondary':
      return 'bg-secondary text-foreground border border-border hover:border-primary transition-all duration-200';
    case 'outline':
      return 'bg-transparent text-foreground border border-border hover:border-primary transition-all duration-200';
    default:
      return 'bg-primary text-black hover:bg-primary-hover shadow-neon-green hover:shadow-lg transition-all duration-200';
  }
};

const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case 'sm':
      return 'py-1.5 px-3 text-sm';
    case 'md':
      return 'py-2 px-4 text-base';
    case 'lg':
      return 'py-3 px-6 text-lg';
    default:
      return 'py-2 px-4 text-base';
  }
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-md inline-flex items-center justify-center transform hover:-translate-y-1';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external = false,
  ...props
}: ButtonLinkProps) => {
  const baseClasses = 'font-medium rounded-md inline-flex items-center justify-center transform hover:-translate-y-1';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...externalProps}
    >
      {children}
    </Link>
  );
};

export default Button; 