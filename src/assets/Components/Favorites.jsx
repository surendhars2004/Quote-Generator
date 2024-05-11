import React from 'react';

function Favorites(){
  const savedQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

  return (
    <div className='absolute top-16'>
      <div className='w-100%  flex justify-around flex-wrap m-6'>
        {
          savedQuotes.map((quote)=>(
            <div className='max-w-sm heightFit cardTransparent bg-slate-50 m-3 px-3 py-3 rounded-lg'>
              <p className="text-lg font-semibold text-center max-sm:text-[16px]">" {quote.content}"</p>
              <p className="text-sm text-gray-500 mt-2 text-end">- {quote.author}</p>
            </div>
          ))
        }
      </div>
    </div> 
  );
};

export default Favorites;
