import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import type { CSSProperties } from 'react';
import { number, parse, string, transform, union } from 'valibot';
import type { ComponentPropsWithAsChild } from './types';

const css = stylex.create({
  flex: {
    display: 'flex',
    flexDirection: 'var(--direction)',
    gap: 'var(--gap)',
  },
});

const Schema = union([transform(number(), value => `${value}px`), string()]);

export function Flex({
  asChild,
  direction,
  gap = 0,
  ...props
}: ComponentPropsWithAsChild<'div'> & {
  direction?: CSSProperties['flexDirection'];
  gap?: number | string;
}) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      style={{
        '--direction': direction,
        '--gap': parse(Schema, gap),
      }}
      {...stylex.props(css.flex)}
      {...props}
    />
  );
}
