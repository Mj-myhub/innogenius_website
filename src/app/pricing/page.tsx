import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the plan that works best for you. All plans include access to our full suite of AI tools.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-4xl font-bold mb-6">$0<span className="text-gray-500 text-lg font-normal">/month</span></p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access to all AI tools</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>5 uses total</strong> per month</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Basic templates</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Standard export formats</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Advanced features</span>
              </li>
            </ul>
            
            <Link href="/signup" className="block text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors">
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Standard Plan */}
        <div className="border-2 border-indigo-500 rounded-lg overflow-hidden shadow-lg relative">
          <div className="bg-indigo-500 text-white py-2 px-4 text-center">
            <span className="font-semibold">Most Popular</span>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Standard</h2>
            <p className="text-4xl font-bold mb-6">$10<span className="text-gray-500 text-lg font-normal">/month</span></p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access to all AI tools</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>50 uses</strong> per month</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Premium templates</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>All export formats</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Email support</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Advanced features</span>
              </li>
            </ul>
            
            <Link href="/signup" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Subscribe Now
            </Link>
          </div>
        </div>
        
        {/* Premium Plan */}
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <p className="text-4xl font-bold mb-6">$15<span className="text-gray-500 text-lg font-normal">/month</span></p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access to all AI tools</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Unlimited uses</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Premium templates</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>All export formats</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Advanced features</span>
              </li>
            </ul>
            
            <Link href="/signup" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Pricing Table */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Compare Plans</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-4 px-6 text-left font-semibold">Plan</th>
                <th className="py-4 px-6 text-left font-semibold">Price</th>
                <th className="py-4 px-6 text-left font-semibold">Included Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Free</td>
                <td className="py-4 px-6">$0/month</td>
                <td className="py-4 px-6">5 uses total/month</td>
              </tr>
              <tr className="border-t bg-indigo-50">
                <td className="py-4 px-6 font-medium">Standard</td>
                <td className="py-4 px-6">$10/month</td>
                <td className="py-4 px-6">50 uses/month</td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Premium</td>
                <td className="py-4 px-6">$15/month</td>
                <td className="py-4 px-6">Unlimited uses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">What counts as a "use"?</h3>
            <p className="text-gray-600">
              A "use" is counted each time you generate content with any of our AI tools. For example, creating a presentation, generating a CV, or humanizing a text each counts as one use.
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
            <p className="text-gray-600">
              Yes, you can upgrade or downgrade your subscription at any time. Changes will take effect at the start of your next billing cycle.
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Do unused uses roll over to the next month?</h3>
            <p className="text-gray-600">
              No, unused uses do not roll over to the next month. Your use count resets at the beginning of each billing cycle.
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Is there a limit to the content I can generate?</h3>
            <p className="text-gray-600">
              While there's no strict limit on the length or complexity of content you can generate, very large or complex requests may count as multiple uses depending on the processing required.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-20 bg-indigo-600 text-white rounded-xl p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">
          Join thousands of users who are already enhancing their productivity with InnoGenius.ai.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup" className="bg-white text-indigo-600 hover:bg-indigo-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Sign Up for Free
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-semibold transition-colors">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
