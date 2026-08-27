// src/components/layout/Container.tsx
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

export function Container({ size = 'lg', className = '', children }: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-[800px]',
    md: 'max-w-[1024px]',
    lg: 'max-w-[1240px]',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidths[size]} ${className}`}
    >
      {children}
    </div>
  );
}
