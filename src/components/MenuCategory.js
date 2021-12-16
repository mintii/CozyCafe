import { useState } from 'react';
import Dish from "./Dish";
import data from "../data/cozy_cafe_dishes.json"

const MenuCategory = ({ type }) => {
  const [cozyCafeDishes, _ ] = useState(data);
  
  const gatherDishes = (type) => {
    if( !Object.keys(cozyCafeDishes).includes(type)) {
      return "foo"
    }
    const columnStart = Math.round(cozyCafeDishes[type].length / 2);
    return (
      <div className="row">
        <div className="col-md-6">
          {cozyCafeDishes[type].slice(0, columnStart).map(
            (dish, index) => <Dish key={index} {...dish}/>)
          }
        </div>
        <div className="col-md-6">
          {cozyCafeDishes[type].slice(columnStart).map(
            (dish, index) => <Dish key={index} {...dish}/>)
          }
        </div>
      </div>
    )
  }

  return (
    <div className="tab-content col-lg-12" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id={type}
        role="tabpanel"
        aria-labelledby="`{type} +` tab "
      >
        {gatherDishes(type)}
      </div>
    </div>
  );
};

export default MenuCategory;
