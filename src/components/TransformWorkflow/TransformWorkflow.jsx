import React from 'react';

const TransformWorkflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center p-20 mt-28 space-y-5'>
            <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
            <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className='space-y-3 mt-10'>
                <div className='flex justify-center items-center gap-3.5'>
                    <div className='bg-white rounded-full w-auto'>
                        <button className='btn px-5 py-4 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</button>
                    </div>
                    <div>
                        <button className='btn btn-ghost px-5 py-4 border-white rounded-full'>View Pricing</button>
                    </div>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default TransformWorkflow;