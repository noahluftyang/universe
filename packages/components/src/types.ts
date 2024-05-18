import type { ComponentPropsWithRef, ElementType } from 'react';

export type ComponentPropsWithAsChild<T extends ElementType> = ComponentPropsWithRef<T> & {
  asChild?: boolean;
};
