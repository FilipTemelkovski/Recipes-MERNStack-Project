import React from 'react';
import {Exit} from './ExitIconComponent';
import {Plate} from './PlateIconComponent';
import {Star} from './StarIconComponent';
import {Time} from './TimeIconComponent';
import "./Popup.style.css";

export const Popup = () => {
  return (
    <div className='Popup'>

      <div>
        <div className='Title'>Title</div>
        <div className='ExitButton'><button><Exit/></button></div>
      </div>

      <div>
        <div>
          <div className='PopuImage'>slika</div>
          <div className='BestServedFor'>
            Best served for
            <div className='Tag'>tag</div>
            </div>
          <div className='BestServedForReview'>Best served for opis</div>
        </div>

        <div>
          <div className='RecipeDetails'>Recipe Details</div>
          <div className='RecipeDetailsReview'>Recipe Details opis</div>
        </div>
        
      </div>

      <div className='PopupIcons'>
        <Time/>
        <Plate/>
        <Star/>
      </div>

    </div>
  )
};
