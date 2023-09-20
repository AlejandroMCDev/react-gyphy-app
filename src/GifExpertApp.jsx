import { useState } from "react";
import {AddCategory,GifGrid} from "./components";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Fire Emblem']);

    const onAddCategory = (newCategory) =>{

      if (categories.includes(newCategory)) {
        console.warn("Es un item repetido");
        return;
      }

      setCategories([newCategory,...categories]);
    }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        //setCategory = {setCategories}
        onNewCategory = {onAddCategory}
      />
        {categories.map( category => <GifGrid key={category} category={category}/> )}
    </>
  )
}

export default GifExpertApp;
