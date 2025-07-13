import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Meriland International - Your Trusted Partner in Global Business Solutions',
    template: '%s | Meriland International'
  },
  description: 'Meriland International is a leading global business consulting firm specializing in international trade, market expansion, and strategic business solutions. Transform your business with our expert guidance.',
  keywords: [
    'Meriland International',
    'business consulting',
    'international trade',
    'market expansion',
    'global business solutions',
    'strategic consulting',
    'business development',
    'international business',
    'trade consulting',
    'business strategy'
  ],
  authors: [{ name: 'Meriland International' }],
  creator: 'Meriland International',
  publisher: 'Meriland International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://merilandinternational.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://merilandinternational.com',
    title: 'Meriland International - Your Trusted Partner in Global Business Solutions',
    description: 'Transform your business with Meriland International\'s expert global business consulting services. Specializing in international trade, market expansion, and strategic solutions.',
    siteName: 'Meriland International',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meriland International - Global Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meriland International - Your Trusted Partner in Global Business Solutions',
    description: 'Transform your business with Meriland International\'s expert global business consulting services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Meriland International",
              "url": "https://merilandinternational.com",
              "logo": "https://merilandinternational.com/logo.png",
              "description": "Leading global business consulting firm specializing in international trade and strategic business solutions",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "info@merilandinternational.com"
              },
              "sameAs": [
                "https://linkedin.com/company/meriland-international",
                "https://twitter.com/merilandintl"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 