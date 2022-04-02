import React from 'react'
import { AwardWinning } from './AwardWinning'
import { CuratedCombos } from './CuratedCombos'
import { Spotlight } from './Spotlight'
import { Unmatched } from './Unmatched'
import  './AwesomeFurniture.css'

export const AwesomeFurniture = () => {

    const [value, setValue] = React.useState(0);

    const handleData = (index) => {
        const allActiveClasses = document.querySelectorAll('.active2')
        console.log(allActiveClasses);
        for (let i = 0; i < allActiveClasses.length; i++) {
          if(index === 3){
            allActiveClasses[i].style = 'border-bottom: 2px solid #2C2C2D'
          }else{
              allActiveClasses[i].style = 'border-bottom: 2px solid #fff'
          }
        }
        allActiveClasses[index].style = 'border-bottom: 2px solid #FFCD32';

        const awesomeContainer = document.querySelector('.awesomeContainer')
        if(index === 3){
            awesomeContainer.style.backgroundColor = '#2C2C2D'
            awesomeContainer.style.color = '#fff'
        }
        else{
            awesomeContainer.style.backgroundColor = ' #fff'
            awesomeContainer.style.color = ' #2C2C2D'
        }
        setValue(index)
      }

  return (
    <div className='awesomeContainer ' >
        <div className='title'>AWESOME FURNITURE</div>
       
        <div  className='productContainer'>
        <div onClick={() => handleData(0)} className='active2'>AWARD WINNING DESIGN</div>
        <div onClick={() => handleData(1)}  className='active2'>CURATED COMBOS</div>
        <div onClick={() => handleData(2)}  className='active2'>UNMATCHED QUALITY</div>
        <div onClick={() => handleData(3)} className='active2'>PRODUCT SPOTLIGHT</div>
        </div>


        {
            value === 0 ? <AwardWinning /> : value === 1 ? <CuratedCombos /> : value === 2 ? <Unmatched/> : <Spotlight/>
        }

    </div>
  )
}
