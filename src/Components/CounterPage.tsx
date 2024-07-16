import React from 'react';
import HighlightText from './Common/HighlightText';
import Counter from './Counter';

const CounterStats: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">
        Helping a local <HighlightText text="business reinvent itself" />
      </h2>
      <p className="text-gray-500 mb-6">We reached here with our hard work and dedication</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <Counter end={2245341} />
          <div className="text-sm text-gray-500">Members</div>
        </div>
        <div className="flex flex-col items-center">
          <Counter end={46328} />
          <div className="text-sm text-gray-500">Clubs</div>
        </div>
        <div className="flex flex-col items-center">
          <Counter end={828867} />
          <div className="text-sm text-gray-500">Event Bookings</div>
        </div>
        <div className="flex flex-col items-center">
          <Counter end={1926436} />
          <div className="text-sm text-gray-500">Payments</div>
        </div>
      </div>
    </div>
  );
};

export default CounterStats;
