// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Crypto vs Actions',
  description: 'Comparez performances des cryptos et actions',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-blue-800 text-white p-4">
          <h1 className="text-2xl font-bold">Crypto vs Actions</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}