import React from 'react';
import './global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Welcome to frontend',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
