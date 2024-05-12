import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';
import { Screen } from '../components/screen';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const data = await getData();

  return (
    <>
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <MantineProvider>
        <Screen>{children}</Screen>
      </MantineProvider>
    </>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export async function getConfig() {
  return {
    render: 'static',
  };
}
