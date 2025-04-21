import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';


const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-10'>

    { title && <Cover img={img} title={title}></Cover> }

               <div className='grid md: grid-cols-2 gap-10 mt-16 '>

         {
    items.map(item =>  <MenuItem
    
    key={item._id}
    item={item}
    >

    </MenuItem> 

    ) 

         }

           </div>

        <button className='btn btn-outline border-0 border-b-4 mt-10 mx-auto block text-center'>View More Menu</button>



        </div>
    );
};

export default MenuCategory;