import React from 'react';
import { colStyles } from './Col.styles';

interface ColProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  textAlign?: 'right' | 'left' | 'center';
  xs?: number | 'auto';
  sm?: number | 'auto';
  md?: number | 'auto';
  lg?: number | 'auto';
  xl?: number | 'auto';
  xxl?: number | 'auto';
  xxxl?: number | 'auto';
  first?: boolean;
  firstXs?: boolean;
  firstSm?: boolean;
  firstMd?: boolean;
  firstLg?: boolean;
  firstXl?: boolean;
  firstXxl?: boolean;
  firstXxxl?: boolean;
  last?: boolean;
  lastXs?: boolean;
  lastSm?: boolean;
  lastMd?: boolean;
  lastLg?: boolean;
  lastXl?: boolean;
  lastXxl?: boolean;
  lastXxxl?: boolean;
}

function Col({
  id,
  className,
  children,
  textAlign,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
  first,
  firstXs,
  firstSm,
  firstMd,
  firstLg,
  firstXl,
  firstXxl,
  firstXxxl,
  last,
  lastXs,
  lastSm,
  lastMd,
  lastLg,
  lastXl,
  lastXxl,
  lastXxxl,
}: ColProps) {
  return (
    <div
      css={colStyles(
        textAlign,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        xxxl,
        first,
        firstXs,
        firstSm,
        firstMd,
        firstLg,
        firstXl,
        firstXxl,
        firstXxxl,
        last,
        lastXs,
        lastSm,
        lastMd,
        lastLg,
        lastXl,
        lastXxl,
        lastXxxl,
      )}
      className={className}
      id={id}
      data-col
    >
      {children}
    </div>
  );
}

export { Col };
