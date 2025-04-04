import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto md:w-4/12 text-center my-8'>
        <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
        <h3 className='md:text-4xl lg:text-4xl sm:text-xl  uppercase border-y-4 py-4'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;