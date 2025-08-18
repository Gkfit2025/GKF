import React from 'react';

// Define the type for a training app  
interface TrainingApp {
  name: string;
  url: string;
}

// Array of training apps (extensible for future additions)
const trainingApps: TrainingApp[] = [
  { name: 'Noradrenaline Training App', url: 'https://vercel.com/promotiongkf46-6175s-projects/v0-noradrenaline' },
  { name: 'Burns Fluid Training App', url: 'https://vercel.com/promotiongkf46-6175s-projects/v0-burns' },
  { name: 'Sepsis App', url: 'https://vercel.com/promotiongkf46-6175s-projects/v0-sepsis-app' },
];

// Training Apps Page component
const TrainingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">GKF Training Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {trainingApps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">{app.name}</h2>
            <p className="text-blue-500 hover:underline">Visit App</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrainingPage;
