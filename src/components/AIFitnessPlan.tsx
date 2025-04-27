import React from 'react';

interface AIFitnessPlanProps {
  className?: string;
}

const AIFitnessPlan: React.FC<AIFitnessPlanProps> = ({ className = '' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${className}`}>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fitness-goal" className="block text-sm font-medium text-gray-700 mb-1">
              Primary Fitness Goal
            </label>
            <select
              id="fitness-goal"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="endurance">Endurance</option>
              <option value="strength">Strength</option>
              <option value="flexibility">Flexibility</option>
              <option value="general-fitness">General Fitness</option>
              <option value="athletic-performance">Athletic Performance</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="plan-type" className="block text-sm font-medium text-gray-700 mb-1">
              Plan Type
            </label>
            <select
              id="plan-type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="workout-only">Workout Plan Only</option>
              <option value="diet-only">Diet Plan Only</option>
              <option value="both">Both Workout & Diet Plan</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              min="16"
              max="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., 30"
            />
          </div>
          
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="fitness-level" className="block text-sm font-medium text-gray-700 mb-1">
              Current Fitness Level
            </label>
            <select
              id="fitness-level"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="athlete">Athlete</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              min="100"
              max="250"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., 175"
            />
          </div>
          
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              min="30"
              max="250"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., 70"
            />
          </div>
          
          <div>
            <label htmlFor="target-weight" className="block text-sm font-medium text-gray-700 mb-1">
              Target Weight (kg, optional)
            </label>
            <input
              type="number"
              id="target-weight"
              min="30"
              max="250"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., 65"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="workout-days" className="block text-sm font-medium text-gray-700 mb-1">
              Available Days for Workout
            </label>
            <select
              id="workout-days"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="2-3">2-3 days per week</option>
              <option value="3-4">3-4 days per week</option>
              <option value="4-5">4-5 days per week</option>
              <option value="5-6">5-6 days per week</option>
              <option value="everyday">Every day</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="workout-duration" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Workout Duration
            </label>
            <select
              id="workout-duration"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="15-30">15-30 minutes</option>
              <option value="30-45">30-45 minutes</option>
              <option value="45-60">45-60 minutes</option>
              <option value="60-90">60-90 minutes</option>
              <option value="90+">90+ minutes</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="equipment-access" className="block text-sm font-medium text-gray-700 mb-1">
            Equipment Access
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="flex items-center">
              <input
                id="home-basic"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="home-basic" className="ml-2 text-sm text-gray-700">
                Home Basic
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="full-gym"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="full-gym" className="ml-2 text-sm text-gray-700">
                Full Gym
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="resistance-bands"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="resistance-bands" className="ml-2 text-sm text-gray-700">
                Resistance Bands
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="dumbbells"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="dumbbells" className="ml-2 text-sm text-gray-700">
                Dumbbells
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="bodyweight-only"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="bodyweight-only" className="ml-2 text-sm text-gray-700">
                Bodyweight Only
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="cardio-equipment"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="cardio-equipment" className="ml-2 text-sm text-gray-700">
                Cardio Equipment
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="dietary-preferences" className="block text-sm font-medium text-gray-700 mb-1">
            Dietary Preferences
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="flex items-center">
              <input
                id="no-restrictions"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="no-restrictions" className="ml-2 text-sm text-gray-700">
                No Restrictions
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="vegetarian"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="vegetarian" className="ml-2 text-sm text-gray-700">
                Vegetarian
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="vegan"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="vegan" className="ml-2 text-sm text-gray-700">
                Vegan
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="keto"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="keto" className="ml-2 text-sm text-gray-700">
                Keto
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="paleo"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="paleo" className="ml-2 text-sm text-gray-700">
                Paleo
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="gluten-free"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="gluten-free" className="ml-2 text-sm text-gray-700">
                Gluten-Free
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="health-conditions" className="block text-sm font-medium text-gray-700 mb-1">
            Health Conditions (Optional)
          </label>
          <textarea
            id="health-conditions"
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="List any health conditions or injuries that might affect your fitness plan..."
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Fitness Plan
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            This will count as 1 use from your monthly limit
          </p>
        </div>
      </form>
    </div>
  );
};

export default AIFitnessPlan;
