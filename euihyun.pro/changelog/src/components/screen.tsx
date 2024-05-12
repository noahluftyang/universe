import { AppShell } from '@mantine/core';
import type { ReactNode } from 'react';

export function Screen({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
