import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Dish = ({ dishName, price, description, dishImage, dishImageAlt,}) => {
  const [showOrderButton, setOrderButton ] = useState(false);

  const addToOrder = (
    <Button 
      size="sm" variant="primary" 
      className="order-button">
        Add to Order
    </Button>
  );

  function handleMouseEnter(){
    setOrderButton(true);
  }

  function handleMouseLeave(){
    setOrderButton(false);
  }

  return (
    <div className="single_menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={dishImage} alt={dishImageAlt}/>
      {showOrderButton ? addToOrder : null}
      <div className="menu_content">
        <h4>
          {dishName} <span>{price}</span>
        </h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Dish;
