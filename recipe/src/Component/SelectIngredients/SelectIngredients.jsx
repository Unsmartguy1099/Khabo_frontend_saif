import { useState } from 'react';
import {CancelPresentationSharp} from '@mui/icons-material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import './SelectIngredients.css'

const SelectIngredients = () => {
    const ingredients = ['Egg', 'Rice', 'Beef', 'Chicken', 'Fish']

    const [inputCount, setInputCount] = useState(0) // Initial input field count
    const [selectedItem, setSelectedItem] = useState([])
    const [inputValues, setInputValues] = useState([])
    const [inputFieldIdx, setInputFieldIdx] = useState(0)

    const handleAddInput = () => {
        setInputCount(inputCount + 1);
        setInputValues([...inputValues,''])
        console.log(inputValues.length)
    }

    const handleInputChange = (value,index) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);              
        filteredOptions(value);
    }

    const handleItemClick = (item) => {
        const updatedValues = [...inputValues];
        updatedValues[inputFieldIdx] = item;
        setInputValues(updatedValues);
        setSelectedItem([])
    }

    const filteredOptions = (match)=>{
        setSelectedItem(ingredients);
        const newSelected = selectedItem.filter(ingredient => ingredient.toLowerCase().includes(match.toLowerCase()));
        (match=="")?setSelectedItem(ingredients):setSelectedItem(newSelected);
    }

    const removeItem = (index)=>{
        setInputCount(inputCount-1);
        if(inputCount==0){
            setSelectedItem([]);
        }
        const newInputvalue = inputValues;
        newInputvalue.splice(index, 1);
        setInputValues(newInputvalue);
    }
    const handleSubmit = ()=>{
        console.log(inputValues)
    }

    return (
        <div className='ingredientListContainer'>
            <div style={{textAlign:'start',paddingLeft:'100px'}}>

                <h3 style={{}}>Add the ingredients for which you want your recipe based on</h3>

            </div>
        { 
        inputValues.map((value, index) => {         
            return  <div key={index} className="added_ingredient_name"> 
                        <input
                            key={index}
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            onClick={()=>setInputFieldIdx(index)}
                            onFocus={(e)=> handleInputChange(e.target.value,index)}
                            placeholder={`Ingredient ${index + 1}`}
                            className='ingredient_input_field'
                        />
                        <div className='ingredient_rm' onClick={()=>removeItem(index)} style={{cursor:"pointer"}}><CancelPresentationSharp  style={{ fontSize:'40px' }}></CancelPresentationSharp></div>
                    </div>

            })
        }     
        <div className='ingredientList'>
            <ul className='ingredient_list'>
                {   
                    selectedItem.map((item, index) => {
                        return <li className='ingredient' key={index}  onClick={() => handleItemClick(item)}>{item}</li>
                    })
                }  
            </ul>
            <button className='ingredientAddBtn' onClick={handleAddInput}><AddSharpIcon></AddSharpIcon></button>
           
            {(inputCount>=1)?<button className='submit_ingredients' onClick={handleSubmit}>Search</button>:""}
            

        </div>
        
      </div>
    );
};

export default SelectIngredients;