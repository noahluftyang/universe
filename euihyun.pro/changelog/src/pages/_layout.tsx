import type { ReactNode } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const data = await getData();

  return (
    <>
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <main>{children}</main>
      <Footer />
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

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
