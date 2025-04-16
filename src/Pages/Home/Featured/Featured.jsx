import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed   text-white pt-8 my-20'>
            <SectionTitle
            heading="Featured Item"
            subHeading="Check it out"
            ></SectionTitle>

            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-30' >
        <div>
            <img src={featuredImg} alt="" />
        </div>

        <div className='md:ml-10'>
            <p>Aprile 09, 2025</p>
            <p className='uppercase'>When can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam atque similique inventore. Vel illo voluptates quos nihil possimus, adipisci hic qui nulla rem suscipit rerum nobis maxime harum dignissimos odio?</p>

            <button className='btn btn-outline border-0 border-b-4 mt-5'>Read more</button>
        </div>

            </div>


        </div> 
    );
};

export default Featured;
