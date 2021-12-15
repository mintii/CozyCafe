import Dish from "./Dish";

const MenuCategory = ({ type }) => {
  let getMenu;

  switch (type) {
    case "lunch":
      getMenu = 
      <div
      className="tab-pane fade show active"
      id="breakfast"
      role="tabpanel"
      aria-labelledby="breakfast-tab"
    >
      <div className="row">
        <div className="col-md-6">
          {/* You can fit 6 dishes per column */}
          <Dish
            dishName={"Chicken Burger"}
            price={"$24"}
            description={
              "Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            }
            dishImage={"https://i.imgur.com/kbpceNv.jpg"}
            dishImageAlt={"burger"}
          />
        </div>
        <div className="col-md-6">
          <Dish
            dishName={"Chicken Burger"}
            price={"$24"}
            description={
              "Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            }
            dishImage={"https://i.imgur.com/kbpceNv.jpg"}
            dishImageAlt={"burger"}
          />
        </div>
      </div>
    </div>;
      break;
    case "breakfast":
      getMenu = 
        <div
          className="tab-pane fade show active"
          id="breakfast"
          role="tabpanel"
          aria-labelledby="breakfast-tab"
        >
          <div className="row">
            <div className="col-md-6">
              {/* You can fit 6 dishes per column */}
              <Dish
                dishName={"Chicken Burger"}
                price={"$24"}
                description={
                  "Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
                }
                dishImage={"https://i.imgur.com/kbpceNv.jpg"}
                dishImageAlt={"burger"}
              />
            </div>
            <div className="col-md-6">
              <Dish
                dishName={"Chicken Burger"}
                price={"$24"}
                description={
                  "Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
                }
                dishImage={"https://i.imgur.com/kbpceNv.jpg"}
                dishImageAlt={"burger"}
              />
            </div>
          </div>
        </div>;
      break;
    case "dinner":
      getMenu = 
        <div
          className="tab-pane fade show active"
          id="breakfast"
          role="tabpanel"
          aria-labelledby="breakfast-tab"
        >
          <div className="row">
            <div className="col-md-6">
              {/* You can fit 6 dishes per column */}
              <Dish
                dishName={"sdfdsdsfdf Burger"}
                price={"$24"}
                description={
                  "Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
                }
                dishImage={"https://i.imgur.com/kbpceNv.jpg"}
                dishImageAlt={"burger"}
              />
            </div>
            <div className="col-md-6">
              <Dish
                dishName={"Chicken Burger"}
                price={"$24"}
                description={
                  "Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
                }
                dishImage={"https://i.imgur.com/kbpceNv.jpg"}
                dishImageAlt={"burger"}
              />
            </div>
          </div>
        </div>;
      break;
    default:
      getMenu = <div>foo</div>;
  }

  return (
    <div className="tab-content col-lg-12" id="myTabContent">
      {getMenu}
    </div>
  );
};

export default MenuCategory;
