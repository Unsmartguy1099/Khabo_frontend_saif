import { useLoaderData } from 'react-router-dom';
import './RecipeSteps.css'
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import RecipeSingleStep from '../RecipeSingleStep/RecipeSingleStep';
import { checkPropTypes } from 'prop-types';

export const recipeStepsLoader = async ({ params }) => {
    console.log(params)
    const res = await fetch(`https://khabo.pythonanywhere.com/recipes/${params.id}`);
    const resJson = await res.json();
  
    return resJson;
  };
const RecipeSteps = ({steps,id}) => {
   // const {steps,id} = useLoaderData();
    console.log(id)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    

    console.log(steps)
    return (
        <div className='recipe-steps-container'>
            <Carousel  onSelect={handleSelect} controls={true}>
                {
                    steps.map((step,index)=>{
                    return <Carousel.Item key={index}>
                                    <RecipeSingleStep key={index} step={step} recipeid={id}></RecipeSingleStep>
                                    <Carousel.Caption>
                                        
                                    </Carousel.Caption>
                            </Carousel.Item>       
                    })
                }
            </Carousel>
           
        </div>
    );
};

RecipeSteps.propTypes = {
    steps: checkPropTypes.Array,
    id : checkPropTypes.number
}

export default RecipeSteps;