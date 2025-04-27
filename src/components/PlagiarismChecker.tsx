import React from 'react';

interface PlagiarismCheckerProps {
  className?: string;
}

const PlagiarismChecker: React.FC<PlagiarismCheckerProps> = ({ className = '' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${className}`}>
      <form className="space-y-4">
        <div>
          <label htmlFor="text-to-check" className="block text-sm font-medium text-gray-700 mb-1">
            Text to Check for Plagiarism
          </label>
          <textarea
            id="text-to-check"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Paste your text here to check for potential plagiarism..."
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="content-type" className="block text-sm font-medium text-gray-700 mb-1">
              Content Type
            </label>
            <select
              id="content-type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="academic">Academic</option>
              <option value="blog">Blog Post</option>
              <option value="article">Article</option>
              <option value="essay">Essay</option>
              <option value="research">Research Paper</option>
              <option value="website">Website Content</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="sensitivity" className="block text-sm font-medium text-gray-700 mb-1">
              Detection Sensitivity
            </label>
            <select
              id="sensitivity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="low">Low (Fewer matches)</option>
              <option value="medium" selected>Medium (Balanced)</option>
              <option value="high">High (More matches)</option>
              <option value="very-high">Very High (Most strict)</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check Options
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
              <input
                id="web-sources"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="web-sources" className="ml-2 text-sm text-gray-700">
                Check against web sources
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="academic-journals"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="academic-journals" className="ml-2 text-sm text-gray-700">
                Check against academic journals
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="books"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="books" className="ml-2 text-sm text-gray-700">
                Check against books
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="paraphrasing"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="paraphrasing" className="ml-2 text-sm text-gray-700">
                Detect paraphrasing
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
                id="exclude-quotes"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="exclude-quotes" className="ml-2 text-sm text-gray-700">
                Exclude quoted text
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="exclude-references"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="exclude-references" className="ml-2 text-sm text-gray-700">
                Exclude references/bibliography
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="exclude-small-matches"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="exclude-small-matches" className="ml-2 text-sm text-gray-700">
                Exclude small matches (< 1%)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="highlight-matches"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="highlight-matches" className="ml-2 text-sm text-gray-700">
                Highlight matching text
              </label>
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Check for Plagiarism
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            This will count as 1 use from your monthly limit
          </p>
        </div>
      </form>
    </div>
  );
};

export default PlagiarismChecker;
