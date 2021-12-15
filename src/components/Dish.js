const Dish = ({ dishName, price, description, dishImage, dishImageAlt,}) => {
  return (
    <div className="single_menu">
      <img src={dishImage} alt={dishImageAlt}/>
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
