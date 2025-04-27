import React from 'react';

interface AICVWriterProps {
  className?: string;
}

const AICVWriter: React.FC<AICVWriterProps> = ({ className = '' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${className}`}>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="document-type" className="block text-sm font-medium text-gray-700 mb-1">
              Document Type
            </label>
            <select
              id="document-type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="cv">CV/Resume</option>
              <option value="cover-letter">Cover Letter</option>
              <option value="both">Both CV & Cover Letter</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <select
              id="industry"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="marketing">Marketing</option>
              <option value="engineering">Engineering</option>
              <option value="retail">Retail</option>
              <option value="hospitality">Hospitality</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 mb-1">
            Target Job Title
          </label>
          <input
            type="text"
            id="job-title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Software Engineer, Marketing Manager, etc."
          />
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Professional Experience
          </label>
          <textarea
            id="experience"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="List your work experience, including job titles, companies, dates, and key responsibilities..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
            Education
          </label>
          <textarea
            id="education"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="List your educational background, including degrees, institutions, and graduation dates..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <textarea
            id="skills"
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="List your technical and soft skills..."
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cv-style" className="block text-sm font-medium text-gray-700 mb-1">
              CV Style
            </label>
            <select
              id="cv-style"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="professional">Professional</option>
              <option value="modern">Modern</option>
              <option value="creative">Creative</option>
              <option value="academic">Academic</option>
              <option value="minimalist">Minimalist</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">
              Tone
            </label>
            <select
              id="tone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="professional">Professional</option>
              <option value="confident">Confident</option>
              <option value="enthusiastic">Enthusiastic</option>
              <option value="formal">Formal</option>
              <option value="conversational">Conversational</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information (Optional)
          </label>
          <textarea
            id="additional-info"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Any other information you'd like to include, such as achievements, certifications, languages, etc..."
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate CV/Cover Letter
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            This will count as 1 use from your monthly limit
          </p>
        </div>
      </form>
    </div>
  );
};

export default AICVWriter;
