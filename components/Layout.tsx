import React, { ReactElement } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }: { children: ReactElement }) {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
