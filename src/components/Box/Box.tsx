import { BaseComponent } from '@src/theme/BaseComponent';
import React from 'react';

interface BoxProps {
  // Vamos resolver esse any depois
  tag?:'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} style={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}