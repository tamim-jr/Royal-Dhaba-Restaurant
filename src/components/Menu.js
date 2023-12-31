import React from "react";
import ReactWhatsapp from "react-whatsapp";
// import { menu } from "../Data";
import bodyLogo from "../assets/images/logo.png";
// import menuImage2 from "../assets/images/menu-2.png";
// import menuImage3 from "../assets/images/menu-3.png";
// import menuImage4 from "../assets/images/menu-4.png";
// import menuImage5 from "../assets/images/menu-5.png";
// import menuImage6 from "../assets/images/menu-6.png";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="main-box box-container">
          <div className="main-sub-box">
            <div className="menu-box-header"><h2>BUFFET MENU</h2></div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item">
                <div className="internal-menu-header">DEVERAGES</div>
                <li>Mineral water</li>
                <li>Soft Drinks and small bottles</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> APPETIZER SOUR</div>
                <li>Soup of the Day</li>
                <li>Appetizer (1 person)</li>
                <li>Fried Wontons/Spring Rolls</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> ASSORTED SALAD</div>
                <li>Potato</li>
                <li>Seasonal Salad</li>
                <li>That Salad</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> MAIN DISHES</div>
                <li>Egg Fride Rice</li>
                <li>Paratha/Nan</li>
                <li>Sweet & Sour Fish</li>
                <li>Fride Chicken/Chicken Wings</li>
                <li>Sliced Chicken With Green Chili & Onion</li>
                <li>Beef with Ginger Mashroom</li>
                <li>Mixed Vegetable with Soya Souce</li>
                <li>Mutton Rexala/Beef Bhuna</li>
                <li>Dal Butter Fry</li>
                <li>B.B.Q</li>
                <li>Grilled Chicken</li>
                <li>Beef Boti Kabab</li>
              </div>
              <br />
              <div className="sub-menu-item">
                <div className="internal-menu-header"> Dessert</div>
                <li>Fresh Fruit Cocktail</li>
                <li>Caramel Custard</li>
                <li>Firni</li>
              </div>
              <br />
              <ReactWhatsapp number="+8801712791500" className="btn menu-btn " message="Hi, I need some information!" ><span className="fab fa-whatsapp"></span> Contact for price</ReactWhatsapp>
            </div>
          </div>
          <div className=" main-sub-box">
            <div className="menu-box-header"><h2>TAKE WAY BOX</h2></div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item sub-item-two">
                <div className="menu-sub-header "><h2>MENU: 01</h2></div>
                <br />
                <h5>Mineral Water (Small)</h5>
                <h5>Plain Pullau</h5>
                <h5>Poast Chicken</h5>
                <br />
                <ReactWhatsapp number="+8801712791500" className="btn menu-btn " message="Hi, I need some information!" ><span className="fab fa-whatsapp"></span> Contact for price</ReactWhatsapp>
              </div>
            </div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item sub-item-two">
                <div className="menu-sub-header "><h2>MENU: 02</h2></div>
                <br />
                <h5>Mineral Water (Small)</h5>
                <h5>Chicken Biriyani</h5>
                <h5>Jali Kabab</h5>
                <h5>Egg Bhuna</h5>
                <br />
                <ReactWhatsapp number="+8801712791500" className="btn menu-btn " message="Hi, I need some information!" ><span className="fab fa-whatsapp"></span> Contact for price</ReactWhatsapp>
              </div>
            </div>
            <div className="sub-menu-box" >
              <div className="sub-menu-item sub-item-two">
                <div className="menu-sub-header "><h2>MENU: 03</h2></div>
                <br />
                <h5>Mineral Water (Small)</h5>
                <h5>Kachchi Biriyani (Beef)</h5>
                <h5>Jali Kabab</h5>
                <h5>Egg Bhuna</h5>
                <br />
                <ReactWhatsapp number="+8801712791500" className="btn menu-btn " message="Hi, I need some information!" ><span className="fab fa-whatsapp"></span> Contact for price</ReactWhatsapp>
              </div>
            </div>

            {/*<div className="box" >
            <img src={menuImage4} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>199 TK.</span></div>
            <div className="btn">
              159 <span>TK.</span>
            </div>
          </div>
          <div className="box" >
            <img src={menuImage5} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>199 TK.</span></div>
            <div className="btn">
              159 <span>TK.</span>
            </div>
          </div>
          <div className="box" >
            <img src={menuImage6} alt="" />
            <h3>tasty and healty</h3>
            <div className="price"><span>199 TK.</span></div>
            <div className="btn">
              159 <span>TK.</span>
            </div>
           </div>*/}
          </div>
          <div className=" main-sub-box">
            <div className="sub-menu-box" >
              <img src={bodyLogo} alt="" />
            </div>
            <div className="menu-box-header"><h2>DHAKA CATERING SERVICE</h2></div>
            <br />
            <div className="sub-menu-box">
              <div className="menu-box-header"><h2>We are offering</h2></div>
              <br />
              <h3>Wedding Recepion</h3>
              <h3>Meetings</h3>
              <h3>Conferences &</h3>
              <h3>Others Programs too</h3>
            </div>
            <div className="sub-menu-box">
            <div className="menu-box-header"><h2>Our Info</h2></div>
              <div className="menu-short-bio">
                <h6>HOUSE-39, ROAD-126, GULSHAN-01, <br /> -DHAKA-1212. <br /> Cell: +8801712791500, +88019111022 <br /> dhakacataringservice247@gmail.com <br /><br /> www.dhakacateringservice.com</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
