// src/app/not-found/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotFoundPage() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Sorry, we couldn’t find that page.</p>

      <button
        onClick={() => setShowHelp(!showHelp)}
        className="mb-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
      >
        {showHelp ? "Hide Help" : "Show Help"}
      </button>

      {showHelp && (
        <div className="max-w-md bg-gray-100 p-4 rounded shadow">
          <p className="mb-2">Here are some helpful links:</p>
          <ul className="list-disc list-inside text-left">
            <li>
              <Link href="/">
                <a className="text-indigo-600 hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/features">
                <a className="text-indigo-600 hover:underline">Features</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a className="text-indigo-600 hover:underline">Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-indigo-600 hover:underline">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
