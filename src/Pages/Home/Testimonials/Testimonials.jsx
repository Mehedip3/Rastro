import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';





const Testimonials = () => {

//    data loadind

    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(3);

    useEffect (() =>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20'>

        <SectionTitle
            subHeading="What Our Client Say"
            heading="Testimonials"
        >

        </SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

         {
            reviews.map(review =>  <SwiperSlide
            key={review._id}
            
            >

            <div className='flex flex-col m-16 items-center'>

            <Rating 
                style={{ maxWidth: 180 }}
                 value={review.rating}
                   onChange={setRating}
                        />

                <p>{review.details}</p>
                <h3 className='text-2xl text-orange-500'>
                    {review.name}
                </h3>
                
            </div>
            
            
            
             </SwiperSlide>
            
            )
         }


      </Swiper>
            
        </section>
    );
};

export default Testimonials;