import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegDotCircle } from 'react-icons/fa';

const Banner = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="banner.png" />
                    <div>
                        <span className='text-purple-600 bg-blue-100 py-2 px-4 font-medium text-sm rounded-full'><FaRegDotCircle className='inline animate-pulse' /> New: AI-Powered Tools Available</span>
                        <h1 className="text-5xl font-bold mt-5">Supercharge Your Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today. Explore Products
                        </p>
                        <button className="btn px-5 py-4 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] mr-3">Explore Products</button>
                        <button className='btn px-5 py-4 text-purple-600 border-purple-600 rounded-full'><CiPlay1 /> Watch Demo</button>
                    </div>
                </div>
            </div>
            <div className='lg:bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white mt-10 lg:mt-0'>
                <div className="stats stats-vertical lg:stats-horizontal bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow lg:gap-10">
                    <div className="stat">
                        <div className="stat-value">50K+</div>
                        <div className="stat-title text-white/90">Active Users</div>
                    </div>
                    <div className='divider divider-horizontal'></div>  {/*it is a divider*/}
                    <div className="stat">
                        <div className="stat-value">200+</div>
                        <div className="stat-title text-white/90">Premium Tools</div>
                    </div>
                    <div className='divider divider-horizontal'></div>  {/*it is a divider*/}
                    <div className="stat">
                        <div className="stat-value">4.9</div>
                        <div className="stat-title text-white/90">Rating</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;