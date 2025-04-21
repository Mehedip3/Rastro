import React from 'react';
import { Parallax} from 'react-parallax';


const Cover = ({img, title}) => {
    return (

      <Parallax
      blur={{ min: -25, max: 25 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
  >
      Blur transition from min to max


   

      <div className="hero h-[550px]">
      <div className="hero-overlay w-[750px] h-[300px]"></div>
     <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
      <p className="mb-5 text-xl">
      Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
       </div>
     </div>
    </div>





       </Parallax>




        


    );
};

export default Cover;

