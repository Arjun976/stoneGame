import React, { useState } from 'react';
import Card from '../components/Card';
import paper from '../assets/paper.png'
import rock from '../assets/rock.png'
import scissor from '../assets/scissor.png'
import paper1 from '../assets/paper1.png'
import rock1 from '../assets/rock1.png'
import scissor1 from '../assets/scissor1.png'

function Home() {
  const [select, setSelect] = useState()
  const [systemSelect, setSystemSelect] = useState()


   const images = [paper1,rock1, scissor1]

   const handleClick = (e)=>{
    const selected =  e.target.alt
    setSelect(()=>{
      if(selected === 'paper' ) return images[0]
      if(selected === 'rock' ) return images[1]
      if(selected === 'scissor' ) return images[2]
    })
    setSystemSelect(images[Math.floor(Math.random()*3)])
   }


  return (
    <div className="p-4 w-svw h-svh flex items-center justify-center">
      <div className="flex items-center justify-center gap-8">
        <div className='flex flex-col gap-6'>
          <Card 
            src={select} // Ensure images exist in public/assets/
            alt="First image description"
          />
          <div className="flex items-center justify-between gap-4">
            <div className="size-16 border border-emerald-500 rounded-2xl overflow-hidden">
              <img onClick={handleClick} src={paper} alt="paper" className="size-full object-cover" />
            </div>
            <div className="size-16 border border-emerald-500 rounded-2xl overflow-hidden">
              <img onClick={handleClick} src={rock} alt="rock" className="size-full object-cover" />
            </div>
            <div className="size-16 border border-emerald-500 rounded-2xl overflow-hidden">
              <img onClick={handleClick} src={scissor} alt="scissor" className="size-full object-cover" />
            </div>
          </div>
        </div>
        <div className="text-4xl font-bold text-gray-800">vs</div>
        <div className='flex flex-col gap-6'>
          <Card 
            src={systemSelect}// Ensure images exist in public/assets/
            alt="First image description"
          
          />
          <div className="flex items-center justify-between gap-4">
            <div className="size-16 cursor-not-allowed border border-emerald-500 relative rounded-2xl overflow-hidden">
              <img src={paper} alt="paper" className="size-full object-cover" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-400/50"></div>
            </div>
            <div className="size-16 cursor-not-allowed border border-emerald-500 relative rounded-2xl overflow-hidden">
              <img src={rock} alt="paper" className="size-full object-cover" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-400/50"></div>
            </div>
            <div className="size-16 cursor-not-allowed border border-emerald-500 relative rounded-2xl overflow-hidden">
              <img src={scissor} alt="paper" className="size-full object-cover" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;