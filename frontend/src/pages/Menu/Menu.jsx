import React, {useState} from 'react'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Menu = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
         <Exploremenu category={category} setCategory={setCategory}/>
         <FoodDisplay category={category}/>
    </div>
  )
}

export default Menu