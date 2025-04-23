import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div>
            

            <div className="card bg-base-100 w-96 shadow-sm">
     <figure>
      <img
      src={image}
      alt="Shoes" />
     </figure>
     <p className='absolute bg-slate-900 right-0 mr-4 mt-4 text-white '> ${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button className='btn btn-outline border-0 border-b-4 mt-10 mx-auto block text-center uppercase text-orange-600 hover:bg-blue-950'>Add To Card</button>
    </div>
     </div>
    </div>
        </div>
    );
};

export default FoodCard;