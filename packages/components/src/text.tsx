import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import type { ComponentPropsWithRef } from 'react';

const css = stylex.create({
  small: { fontSize: '0.5rem' },
  medium: { fontSize: '1rem' },
  large: { fontSize: '2rem' },
});

export function Text({
  asChild,
  variant = 'medium',
  ...props
}: ComponentPropsWithRef<'p'> & { asChild?: boolean; variant?: 'small' | 'medium' | 'large' }) {
  const Component = asChild ? Slot : 'p';

  return <Component {...stylex.props(css[variant])} {...props} />;
}
