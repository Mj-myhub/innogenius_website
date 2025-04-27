import React from 'react';

interface GrammarCheckerProps {
  className?: string;
}

const GrammarChecker: React.FC<GrammarCheckerProps> = ({ className = '' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${className}`}>
      <form className="space-y-4">
        <div>
          <label htmlFor="text-to-check" className="block text-sm font-medium text-gray-700 mb-1">
            Text to Check
          </label>
          <textarea
            id="text-to-check"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Paste your text here to check for grammar, spelling, and style issues..."
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              id="language"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="en-US">English (US)</option>
              <option value="en-GB">English (UK)</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="writing-style" className="block text-sm font-medium text-gray-700 mb-1">
              Writing Style
            </label>
            <select
              id="writing-style"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="general">General</option>
              <option value="academic">Academic</option>
              <option value="business">Business</option>
              <option value="technical">Technical</option>
              <option value="creative">Creative</option>
              <option value="casual">Casual</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check Options
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="flex items-center">
              <input
                id="grammar"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="grammar" className="ml-2 text-sm text-gray-700">
                Grammar
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="spelling"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="spelling" className="ml-2 text-sm text-gray-700">
                Spelling
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="punctuation"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="punctuation" className="ml-2 text-sm text-gray-700">
                Punctuation
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="style"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="style" className="ml-2 text-sm text-gray-700">
                Style
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="clarity"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="clarity" className="ml-2 text-sm text-gray-700">
                Clarity
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="conciseness"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="conciseness" className="ml-2 text-sm text-gray-700">
                Conciseness
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Advanced Options
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
              <input
                id="formality"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="formality" className="ml-2 text-sm text-gray-700">
                Check formality level
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="inclusive-language"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="inclusive-language" className="ml-2 text-sm text-gray-700">
                Check for inclusive language
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="readability"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="readability" className="ml-2 text-sm text-gray-700">
                Analyze readability score
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="sentence-variety"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="sentence-variety" className="ml-2 text-sm text-gray-700">
                Check sentence variety
              </label>
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Check Grammar & Style
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            This will count as 1 use from your monthly limit
          </p>
        </div>
      </form>
    </div>
  );
};

export default GrammarChecker;
