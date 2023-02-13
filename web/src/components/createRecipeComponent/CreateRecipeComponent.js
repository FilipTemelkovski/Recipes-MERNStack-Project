import React from 'react';
import { Back } from './BackIconComponent';

export const CreateRecipeComponent = () => {
  return (
    <div>
     
     <div>
        <div>Title</div>
        <div><button><Back/></button></div>
      </div>

      <form>
        <div>
          <label>Recipe Title</label>
          <input
            type="text"
            placeholder="Homemade Pizza"
            name='title'
            
          />
        </div>
        <div>
          <label>Category</label>
          <select>
            <option value='breakfast'>Breakfast</option>
            <option value='brunch'>Brunch</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
          </select>
        </div>
        <div>
          <label>Preparation Time</label>
          <input
            type="number"
            placeholder='45'
            name='time'
            
          />
        </div>
        <div>
          <label>No. People</label>
          <input
            type="number"
            placeholder='4'
            name='people'
            
          />
        </div>
        <div>
          <label>Short Description</label>
          <input
            type="text"
            placeholder='Lorem'
            name='shortDescription'
            
          />
        </div>
        <div>
          <label>Recipe</label>
          <input
            type="text"
            placeholder='Lorem'
            name='recipe'
           
          />
        </div>
        <div>
          <button>SAVE</button>
        </div>
      </form>
    </div>
  )
};
