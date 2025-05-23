import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">InnoGenius.ai Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">AI Presentation Generator</h2>
          <p className="text-gray-600 mb-4">Create professional presentations and diagrams from text descriptions.</p>
          <Link href="/features/presentations" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Create Presentation
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">AI Academic Writer</h2>
          <p className="text-gray-600 mb-4">Get assistance with thesis, papers, and academic writing.</p>
          <Link href="/features/academic" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Write Paper
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">AI Humanizer</h2>
          <p className="text-gray-600 mb-4">Transform AI-generated text into natural, human-like content.</p>
          <Link href="/features/humanizer" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Humanize Text
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">AI Text Detector</h2>
          <p className="text-gray-600 mb-4">Check if text was generated by AI with our advanced detection tool.</p>
          <Link href="/features/detector" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Detect AI Text
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">AI CV & Cover Letter</h2>
          <p className="text-gray-600 mb-4">Create professional CVs and cover letters tailored to your experience.</p>
          <Link href="/features/cv-writer" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Create CV
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">AI Fitness Plan</h2>
          <p className="text-gray-600 mb-4">Get personalized workout routines and diet plans for your goals.</p>
          <Link href="/features/fitness" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Create Fitness Plan
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">Grammar Checker</h2>
          <p className="text-gray-600 mb-4">Improve your writing with advanced grammar and style suggestions.</p>
          <Link href="/features/grammar" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Check Grammar
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">Plagiarism Checker</h2>
          <p className="text-gray-600 mb-4">Verify the originality of your content with our plagiarism detection tool.</p>
          <Link href="/features/plagiarism" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Check Plagiarism
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">Usage & Subscription</h2>
          <p className="text-gray-600 mb-4">Manage your subscription and track your usage across all features.</p>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-700">Free Plan: <span className="font-semibold">3/5</span> uses remaining this month</p>
              <div className="relative group">
                <svg className="w-5 h-5 text-gray-500 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-sm rounded p-2 w-48 right-0 -mt-2 shadow-lg">
                  Free plan includes 5 uses per month across all tools. Upgrade for more uses.
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>3 uses</span>
              <span>5 total</span>
            </div>
          </div>
          <Link href="/account/subscription" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Upgrade Plan
          </Link>
        </div>
      </div>
      
      <div className="bg-indigo-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Your Subscription</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-semibold">Free Plan</h3>
                <div className="relative group ml-2">
                  <svg className="w-5 h-5 text-gray-500 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-sm rounded p-2 w-64 left-0 -mt-2 shadow-lg">
                    Free plan includes 5 uses per month total across all tools. Uses reset on the 1st of each month.
                  </div>
                </div>
              </div>
              <p className="text-gray-600">5 uses total per month across all features</p>
            </div>
            <Link href="/pricing" className="mt-4 md:mt-0 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Upgrade to Standard
            </Link>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Usage This Month</h4>
              <div className="relative group">
                <svg className="w-5 h-5 text-gray-500 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-sm rounded p-2 w-64 right-0 -mt-2 shadow-lg">
                  Each time you use any AI tool, it counts as 1 use from your monthly limit. Standard plan includes 50 uses/month, Premium plan includes unlimited uses.
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>3 uses</span>
              <span>5 total</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Uses reset in 12 days</p>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Recent Activity</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                <span className="text-gray-900 font-medium">AI Humanizer</span> - Yesterday at 2:30 PM
              </li>
              <li className="text-sm text-gray-600">
                <span className="text-gray-900 font-medium">Grammar Checker</span> - 2 days ago at 10:15 AM
              </li>
              <li className="text-sm text-gray-600">
                <span className="text-gray-900 font-medium">AI CV Writer</span> - 3 days ago at 4:45 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">Subscription Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Free Plan</h3>
            <p className="text-3xl font-bold mb-4">$0<span className="text-sm text-gray-500 font-normal">/month</span></p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>5 uses total/month</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Basic features</span>
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
              Current Plan
            </button>
          </div>
          
          <div className="border border-indigo-500 rounded-lg p-6 shadow-md relative">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
            <p className="text-3xl font-bold mb-4">$10<span className="text-sm text-gray-500 font-normal">/month</span></p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>50 uses/month</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>All features</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Upgrade Now
            </button>
          </div>
          
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
            <p className="text-3xl font-bold mb-4">$15<span className="text-sm text-gray-500 font-normal">/month</span></p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Unlimited uses</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>All features</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
