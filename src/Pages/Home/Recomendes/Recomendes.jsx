import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import slide1 from '../../../assets/home/slide1.jpg'
const Recomendes = () => {
    return (
        <section>

        <SectionTitle
        
          subHeading='Should Try'
          heading='CHEF RECOMMENDS'
        >

        </SectionTitle>


        <section className='grid grid-cols-3'>

        <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
         <img
      src={slide1}
      alt="" />
      </figure>
      <div className="card-body text-center items-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">

    <button className='btn btn-outline border-0 border-b-4 mt-10 mx-auto block text-center uppercase text-orange-600 hover:bg-blue-950'>Add To Card</button>

    </div>
     </div>
      </div>


      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
         <img
      src={slide1}
      alt="" />
      </figure>
      <div className="card-body text-center items-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">

    <button className='btn btn-outline border-0 border-b-4 mt-10 mx-auto block text-center uppercase text-orange-600 hover:bg-blue-950'>Add To Card</button>

    </div>
     </div>
      </div>



      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
         <img
      src={slide1}
      alt="" />
      </figure>
      <div className="card-body text-center items-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">

    <button className='btn btn-outline border-0 border-b-4 mt-10 mx-auto block text-center uppercase text-orange-600 hover:bg-blue-950'>Add To Card</button>

    </div>
     </div>
      </div>

        </section>


     



            
        </section>
    );
};

export default Recomendes;