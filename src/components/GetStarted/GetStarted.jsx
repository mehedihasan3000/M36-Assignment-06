import React from 'react';

const GetStarted = () => {
    return (
        <div className='container mx-auto mt-28'>

            <h1 className='text-3xl font-bold text-center'>Get Started In 3 Steps</h1>
            <p className='text-center mt-3'>Start using premium digital tools in minutes, not hours.</p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>

                <div className='card bg-base-100 shadow-md px-5 py-20 space-y-4 items-center justify-center relative'>
                    <span className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2 absolute top-5 right-5'>01</span>
                    <div className='bg-purple-100 rounded-full p-5'><img src="user.png" alt="" /></div>
                    <h2 className='text-2xl font-semibold'>Create Account</h2>
                    <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='card bg-base-100 shadow-md px-5 py-20 space-y-4 items-center justify-center relative'>
                    <span className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2 absolute top-5 right-5'>02</span>
                    <div className='bg-purple-100 rounded-full p-5'><img src="package.png" alt="" /></div>
                    <h2 className='text-2xl font-semibold'>Choose Products</h2>
                    <p className='text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
                </div>

                <div className='card bg-base-100 shadow-md px-5 py-20 space-y-4 items-center justify-center relative'>
                    <span className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2 absolute top-5 right-5'>03</span>
                    <div className='bg-purple-100 rounded-full p-5'><img src="rocket.png" alt="" /></div>
                    <h2 className='text-2xl font-semibold'>Start Creating</h2>
                    <p className='text-center'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;