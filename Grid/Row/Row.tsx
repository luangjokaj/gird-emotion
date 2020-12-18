import React from 'react';
import { rowStyles } from './Row.styles';

interface RowProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  alignItems?:
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial';
  justifyContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial';
  gapsXs?: 'none' | 'default' | 'medium' | 'big';
  gapsSm?: 'none' | 'default' | 'medium' | 'big';
  gapsMd?: 'none' | 'default' | 'medium' | 'big';
  gapsLg?: 'none' | 'default' | 'medium' | 'big';
  gapsXl?: 'none' | 'default' | 'medium' | 'big';
  gapsXxl?: 'none' | 'default' | 'medium' | 'big';
  gapsXxxl?: 'none' | 'default' | 'medium' | 'big';
}

function Row({
  id,
  className,
  children,
  alignItems,
  justifyContent,
  gapsXs = 'default',
  gapsSm,
  gapsMd,
  gapsLg,
  gapsXl,
  gapsXxl,
  gapsXxxl,
}: RowProps) {
  return (
    <div
      css={rowStyles(
        alignItems,
        justifyContent,
        gapsXs,
        gapsSm,
        gapsMd,
        gapsLg,
        gapsXl,
        gapsXxl,
        gapsXxxl,
      )}
      id={id}
      className={className}
      data-row
    >
      {children}
    </div>
  );
}

export { Row };
