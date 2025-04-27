import React from 'react';

export default function EmailCaptureForm() {
  return (
    <div className="bg-indigo-50 rounded-lg p-8 my-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
          Get notified when we launch on innogenius.ai
        </h2>
        <p className="text-gray-600 mb-6">
          Be among the first to experience our AI-powered tools when we officially launch.
          Sign up now for early access and exclusive offers.
        </p>
        
        <form 
          action="https://formspree.io/f/your-formspree-endpoint" 
          method="POST"
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              Notify me when we launch
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Your information will never be shared with third parties.
            See our <a href="/privacy" className="underline hover:text-indigo-600">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
