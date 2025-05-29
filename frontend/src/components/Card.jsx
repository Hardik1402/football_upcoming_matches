import React from 'react';

const Card = ({ data }) => {
  const matches = data.matches || [];

  return (
    <div className="p-4">
      {matches.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming matches found.</p>
      ) : (
        matches.map((item, index) => (
          <div
            key={index}
            className="bg-white max-w-md mx-auto rounded-xl shadow-md p-4 my-4"
          >
            <h2 className="text-lg font-bold text-center mb-2">
              {item.homeTeam.name} vs {item.awayTeam.name}
            </h2>
            <p className="text-center text-gray-600">
              {new Date(item.utcDate).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
