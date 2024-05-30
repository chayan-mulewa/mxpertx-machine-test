import React from 'react';

function Card({ title, image, buttonStatus, discribtion }) {
  const getTextColor = () => {
    switch (buttonStatus) {
      case 'New':
        return 'text-blue-600';
      case 'Completed':
        return 'text-green-600';
      case 'In Progress':
        return 'text-yellow-400';
      default:
        return 'text-black';
    }
  };

  return (
    <div className='w-72 flex flex-col gap-4 p-2 rounded-xl justify-center items-center' style={{ background: 'linear-gradient(270deg, #3d8fb8 0%, #7657bc 100%)' }}>
      <img className='h-60 w-60 rounded-xl' src={`https://ik.imagekit.io/dev24/${image}`} alt="" />
      <h1 className='text-black'>{title}</h1>
      <h1 className='text-black'>{discribtion}</h1>
      {buttonStatus && (
        <button className={`w-60 px-2 py-2 rounded-3xl bg-white ${getTextColor()}`}>{buttonStatus}</button>
      )}
    </div>
  );
};

export default Card;
