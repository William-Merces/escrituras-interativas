import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  gradient?: 'primary' | 'secondary';
  className?: string;
  children: ReactNode;
}

export default function Card({ 
  title, 
  icon, 
  gradient = 'primary', 
  className = '', 
  children 
}: CardProps) {
  const gradientClasses = {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-secondary-500 to-secondary-600'
  };

  return (
    <div className={`card ${className}`}>
      {(title || icon) && (
        <div className={`bg-gradient-to-r ${gradientClasses[gradient]} rounded-t-xl p-4`}>
          <div className="flex items-center space-x-3">
            {icon && <div className="text-white">{icon}</div>}
            {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
          </div>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}