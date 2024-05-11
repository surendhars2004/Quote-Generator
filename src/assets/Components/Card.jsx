import React, { useState, useEffect } from 'react';

function Card(){
  const [quote, setQuote] = useState('')
  const [color, setColor] = useState('grey')
  const [colorCopy, setColorCopy] = useState('grey')
  const [colorShare, setColorShare] = useState('grey')

    function fetchRandomQuote() {
      fetch('https://api.quotable.io/random')
      .then((data)=>{return data.json()})
      .then((data)=>{
        console.log(data)
        setQuote(data)
        setColor('grey')
        setColorCopy('grey')
        setColorShare('grey')
      })
  }

  useEffect(() => {
    fetchRandomQuote();
  }, []);


  const handleSaveQuote = () => {
      const savedQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
      const updatedQuotes = [...savedQuotes, quote];
      localStorage.setItem('favoriteQuotes', JSON.stringify(updatedQuotes));
      setColor('dodgerblue')
  }

  function shareQuote(){
    setColorShare('dodgerblue')
    if(navigator.share){
      navigator.share({
        text: quote.content
      }).then(()=>{console.log('suucess')})
    }
    else{
      alert("your current browser didn't support to share")
    }
    
  }
  function copyToClipboard(){
    navigator.clipboard.writeText(quote.content)
    setColorCopy('dodgerblue')
  }

  return (
    <div className="centerDiv">

        <div className="max-w-lg px-6 py-3 cardTransparent card shadow-3xl rounded-lg max-sm:px-3">
          <p className='text-center pb-3 text-2xl font-bold max-sm:pb-1 max-md:text-xl'>Quote  of the day</p>
          <p className="text-xl  text-center mt-2  max-md:text-lg max-sm:text-sm">" {quote.content}"</p>
          <p className="text-sm text-gray-500 mt-5 text-end max-sm:text-[12px] max-sm:mt-2">- {quote.author}</p>
          <div className="border my-2 border-gray-400"></div>
          <div className="mt-4 flex justify-between gap-5 items-center max-sm:gap-[4px] flex-wrap">
            
            <div className="flex gap-[20px] items-center max-sm:gap-[15px]">
              <svg onClick={handleSaveQuote} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={color} class="bi bi-heart-fill max-sm:w-[20px]" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
              </svg>

              <svg onClick={shareQuote} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" class="bi bi-share-fill max-sm:w-[20px]" viewBox="0 0 16 16">
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
              </svg>

              <svg onClick={copyToClipboard} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colorCopy} class="bi bi-copy max-sm:w-[20px]" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
              </svg>
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded max-sm:text-sm max-sm:p-2" onClick={fetchRandomQuote} >
              New Quote
            </button>
            
          </div>
        </div>
    </div>
  );
};

export default Card;
