import React from 'react';
import * as styles from './Container.styles';

interface ContainerProps {
  children: any;
  fluid?: boolean;
  className?: string;
  align?: 'right' | 'left' | 'center';
}

function Container({ children, fluid, className, align }: ContainerProps) {
  return (
    <div
      css={(theme) => styles.containerStyles(theme, fluid, align)}
      className={className}
      data-container
    >
      {children}
    </div>
  );
}

export { Container };
