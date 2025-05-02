// src/app/layout.tsx
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'InnoGenius.ai — AI-powered tools for productivity and creativity',
  description:
    'InnoGenius.ai — AI-powered text humanizer, CV writer, fitness planner, grammar & plagiarism checker.',
  openGraph: {
    title: 'InnoGenius.ai — AI-powered tools for productivity and creativity',
    description:
      'InnoGenius.ai — AI-powered text humanizer, CV writer, fitness planner, grammar & plagiarism checker.',
    url: 'https://innogenius.ai',
    siteName: 'InnoGenius.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InnoGenius.ai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InnoGenius.ai — AI-powered tools for productivity and creativity',
    description:
      'InnoGenius.ai — AI-powered text humanizer, CV writer, fitness planner, grammar & plagiarism checker.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

