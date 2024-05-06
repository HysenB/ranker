import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="my-12 text-center">Welcome to Rankr</h1>
      <div className="flex flex-col justify-center my-12">
        <button className="my-2 box btn-orange" onClick={() => console.log('Go to Create Poll')}>
          Create New Poll
        </button>
        <button className="my-2 box btn-purple" onClick={() => console.log('Go to Join Poll')}>
          Join Existing Poll
        </button>
      </div>
    </div>
  );
};

export default Welcome;
