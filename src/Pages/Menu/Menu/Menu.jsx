import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>

            <Cover img={menuImg} title="Our menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title="Our menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title="Our menu"></Cover>
            <PopularMenu></PopularMenu>

        

            
        </div>
    );
};

export default Menu;