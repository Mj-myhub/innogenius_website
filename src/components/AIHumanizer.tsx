import React from 'react';

interface AIHumanizerProps {
  className?: string;
}

const AIHumanizer: React.FC<AIHumanizerProps> = ({ className = '' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${className}`}>
      <form className="space-y-4">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">
            Text to Humanize
          </label>
          <textarea
            id="input-text"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Paste AI-generated text here that you want to make sound more human..."
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">
              Tone
            </label>
            <select
              id="tone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="casual">Casual</option>
              <option value="professional">Professional</option>
              <option value="academic">Academic</option>
              <option value="friendly">Friendly</option>
              <option value="persuasive">Persuasive</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="complexity" className="block text-sm font-medium text-gray-700 mb-1">
              Complexity Level
            </label>
            <select
              id="complexity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="simple">Simple</option>
              <option value="moderate" selected>Moderate</option>
              <option value="complex">Complex</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">
              Writing Style
            </label>
            <select
              id="style"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="narrative">Narrative</option>
              <option value="descriptive">Descriptive</option>
              <option value="expository">Expository</option>
              <option value="persuasive">Persuasive</option>
              <option value="creative">Creative</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="creativity" className="block text-sm font-medium text-gray-700 mb-1">
              Creativity Level
            </label>
            <input
              type="range"
              id="creativity"
              min="0"
              max="100"
              defaultValue="50"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Conservative</span>
              <span>Balanced</span>
              <span>Creative</span>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Options
          </label>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <input
                id="use-contractions"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="use-contractions" className="ml-2 text-sm text-gray-700">
                Use contractions
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="vary-sentence-length"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="vary-sentence-length" className="ml-2 text-sm text-gray-700">
                Vary sentence length
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="include-idioms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="include-idioms" className="ml-2 text-sm text-gray-700">
                Include idioms
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="add-filler-words"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="add-filler-words" className="ml-2 text-sm text-gray-700">
                Add filler words
              </label>
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Humanize Text
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            This will count as 1 use from your monthly limit
          </p>
        </div>
      </form>
    </div>
  );
};

export default AIHumanizer;
