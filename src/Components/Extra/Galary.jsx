import React from 'react';

const Galary = () => {
    return (
        <div className='mt-10 mb-10 rounded  px-1 md:px-8 lg:px-28'>

            <div className='px-3 py-6 bg-gradient-to-br to-orange-300 via-yellow-200 from-yellow-300'>
            <div className='text-center text-green-500 mb-10 '  >
                <h1 className='text-4xl font-semibold'>GALLERY</h1>
            </div>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3'>
                
                <img className='w-full' src="https://i.ibb.co/7CnmPWq/milkovi-1143487-unsplash-344x194.jpg" alt="" />
                <img className='w-full' src="https://i.ibb.co/BsQnkmV/max-panama-312158-unsplash-540x304.jpg" alt="" />
                <img className='w-full' src="https://i.ibb.co/j4yFcqx/mr-karl-1146337-unsplash-540x304.jpg" alt="" />
                <img className='w-full' src="https://i.ibb.co/DWZvk4k/steve-johnson-704521-unsplash-540x304.jpg" alt="" />
                <img className='w-full h-full' src="https://i.ibb.co/6Zw9gGg/alexis-antonio-1136761-unsplash-1128x484.jpg" alt="" />
                <img className='w-full' src="https://i.ibb.co/5hZpVhQ/luke-pamer-40075-unsplash-540x304.jpg" alt="" />
                <img className='w-full' src="https://i.ibb.co/S7gpvVp/clark-street-mercantile-33917-unsplash-540x304.jpg" alt="" />
                <img className='w-full' src="https://i.ibb.co/rwkWRZW/anna-sullivan-635350-unsplash-540x304.jpg" alt="" />
                <img className='w-full h-full' src="https://i.ibb.co/xHNL02c/28-534x267.jpg" alt="" />
               
                
            </div>
            </div>
        </div>
    );
};

export default Galary;