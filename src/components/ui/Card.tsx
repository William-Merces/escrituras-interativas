import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  gradient?: 'blue' | 'green' | 'purple';
  className?: string;
  children: ReactNode;
}

const Card = ({ title, icon, gradient = 'blue', className = '', children }: CardProps) => {
  const gradientClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <div className={`card ${className}`}>
      {(title || icon) && (
        <div className={`card-gradient ${gradientClasses[gradient]} p-4`}>
          <div className="flex items-center space-x-3">
            {icon && <div className="text-white">{icon}</div>}
            {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
          </div>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Card;