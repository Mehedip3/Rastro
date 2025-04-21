import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'


import dessert from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
// import PopularMenu from '../../Home/PopularMenu/PopularMenu';


import useMenu from '../../../hooks/useMenu';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter (item => item.category === 'dessert');
  const pizzas = menu.filter (item => item.category === 'pizza');
  const salads = menu.filter (item => item.category === 'salad');
  const soups = menu.filter (item => item.category === 'soup');
  const offered = menu.filter (item => item.category === 'offered');
    return (
        <div>

            <Cover img={menuImg} title="OUR MENU"
            info="Would you like to try a dish?"
            ></Cover>
            {/* main section */}

            <SectionTitle subHeading="Don't miss" heading="Today's Offered"
            ></SectionTitle>
            {/* today offer */}
           <MenuCategory items={offered}></MenuCategory>

        {/* dessart */}
        <MenuCategory
        img={dessert}
        title="Desserts"
        items={desserts}
        info="Would you like to try a dish?"
      
        ></MenuCategory>


         {/* pizza */}
         <MenuCategory
        img={pizza}
        title="Pizza"
        items={pizzas}
      
        ></MenuCategory>

        {/* salads */}

        <MenuCategory
        img={salad}
        title="salad"
        items={salads}
      
        ></MenuCategory>


        {/* soups */}
        <MenuCategory
        img={soup}
        title="soup"
        items={soups}
      
        ></MenuCategory>


        </div>
    );
};

export default Menu;