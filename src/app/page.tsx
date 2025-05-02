"use client";
// src/app/page.tsx
"use client";

import { useState } from "react";
// import Hero from "../components/Hero";  // Hero.tsx is missing, so we disable it
import EmailCaptureForm from "../components/EmailCaptureForm";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero Section (disabled until Hero.tsx is added) */}
      {/* <Hero /> */}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unlock the Power of AI with InnoGenius.ai
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              AI-powered tools to enhance your productivity, creativity, and workflow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/features"
                className="bg-white text-indigo-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold text-lg transition-colors"
              >
                Explore Features
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent hover:bg-white/10 border-2 border-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our AI-Powered Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how our suite of AI tools can transform your workflow
                and boost your productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Humanizer */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* Icon omitted for brevity */}
                  <h3 className="text-xl font-bold mb-2">AI Humanizer</h3>
                  <p className="text-gray-600 mb-4">
                    Transform AI-generated text into natural, human-like
                    content that passes AI detection tools.
                  </p>
                  <Link
                    href="/features/humanizer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
              {/* …repeat for other tools… */}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/features"
                className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 py-3 px-8 rounded-lg font-semibold transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get started with InnoGenius.ai in just a few simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Choose a Tool</h3>
                <p className="text-gray-600">
                  Select from our range of AI-powered tools designed to solve specific problems.
                </p>
              </div>
              {/* …steps 2 & 3… */}
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the plan that works best for you, from free to unlimited.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Plans… */}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View detailed pricing information →
              </Link>
            </div>
          </div>
        </section>

        {/* Email Capture Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-xl">
            <h2 className="text-2xl font-bold mb-4">
              Get notified when we launch
            </h2>
            <EmailCaptureForm />
          </div>
        </section>
      </main>
    </>
  );
}
