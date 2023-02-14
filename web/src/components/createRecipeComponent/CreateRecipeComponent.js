import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Back } from './BackIconComponent';
import { RecipeContext } from '../../context/RecipesContext';

export const CreateRecipeComponent = () => {

  const { getCreatedRecipeFormValues, handleCreatedRecipeSubmit } = useContext(RecipeContext);

  return (
    <div>
     
     <div>
        <div>Title</div>
        <div>
          <Link to="/MyRecipes"><button><Back/></button></Link>
        </div>
      </div>

      <form>
        <div>
          <label>Recipe Title</label>
          <input
            type="text"
            placeholder="Homemade Pizza"
            name='title'
            onChange={getCreatedRecipeFormValues}
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
            onChange={getCreatedRecipeFormValues}
          />
        </div>
        <div>
          <label>No. People</label>
          <input
            type="number"
            placeholder='4'
            name='people'
            onChange={getCreatedRecipeFormValues}
          />
        </div>
        <div>
          <label>Short Description</label>
          <input
            type="text"
            placeholder='Lorem'
            name='shortDescription'
            onChange={getCreatedRecipeFormValues}
          />
        </div>
        <div>
          <label>Recipe</label>
          <input
            type="text"
            placeholder='Lorem'
            name='recipe'
            onChange={getCreatedRecipeFormValues}
          />
        </div>
        <div>
          <button onClick={handleCreatedRecipeSubmit}>SAVE</button>
        </div>
      </form>
    </div>
  )
};
