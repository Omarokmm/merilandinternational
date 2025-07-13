import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ميريلاند العالمية - تجهيزات الفنادق والمطاعم والمقاهي',
    template: '%s | ميريلاند العالمية'
  },
  description: 'ميريلاند العالمية لتجهيزات الفنادق والمطاعم والمقاهي والمطابخ المركزية - خبرة في تصنيع وتوريد معدات المطابخ والمطاعم من الستانلس ستيل بجودة عالية وخدمة احترافية في الكويت.',
  keywords: [
    'ميريلاند العالمية',
    'تجهيزات فنادق',
    'معدات مطاعم',
    'معدات مقاهي',
    'مطابخ مركزية',
    'ستانلس ستيل',
    'معدات مطابخ',
    'أفران صناعية',
    'ثلاجات تجارية',
    'ماكينات قهوة',
    'معدات غسيل',
    'شوايات غاز',
    'Kuwait',
    'Kitchen Equipment',
    'Restaurant Supplies',
    'Hotel Equipment'
  ],
  authors: [{ name: 'Meriland International' }],
  creator: 'Meriland International',
  publisher: 'Meriland International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://merilandinternational.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_KW',
    url: 'https://merilandinternational.vercel.app',
    title: 'ميريلاند العالمية - تجهيزات الفنادق والمطاعم والمقاهي',
    description: 'ميريلاند العالمية لتجهيزات الفنادق والمطاعم والمقاهي والمطابخ المركزية - خبرة في تصنيع وتوريد معدات المطابخ والمطاعم من الستانلس ستيل بجودة عالية وخدمة احترافية في الكويت.',
    siteName: 'ميريلاند العالمية',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ميريلاند العالمية - تجهيزات الفنادق والمطاعم والمقاهي',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ميريلاند العالمية - تجهيزات الفنادق والمطاعم والمقاهي',
    description: 'ميريلاند العالمية لتجهيزات الفنادق والمطاعم والمقاهي والمطابخ المركزية - خبرة في تصنيع وتوريد معدات المطابخ والمطاعم من الستانلس ستيل بجودة عالية وخدمة احترافية في الكويت.',
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
              "url": "https://merilandinternational.vercel.app",
              "logo": "https://merilandinternational.vercel.app/logo.png",
              "description": "Leading kitchen and restaurant equipment supplier specializing in stainless steel equipment for hotels, restaurants, cafes and central kitchens in Kuwait",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KW",
                "addressLocality": "Shuwaikh Industrial",
                "addressRegion": "Kuwait"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+965-99348402",
                "contactType": "customer service",
                "email": "info@maryland-intl.com"
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