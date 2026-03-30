import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, carts, setCarts }) => {
    // console.log(product);
    const { name, description, price, period, tag, features, icon } = product;
    const [isAdded, setIsAdded] = useState(false);
    const handleCartsProduct = (product) => {
        const isFound = carts.find(item => item.id === product.id);
        if (isFound) {
            toast.error('Item already in carts');
            return;
        }
        setCarts([...carts, product]);
        toast.success("Item added to carts!");
        setIsAdded(true);
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body relative">
                <span className={`badge badge-sm ${tag === 'Best Seller' ? 'bg-amber-100 text-amber-700' : tag === 'Popular' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'} absolute right-2 top-2`}>{tag}</span>

                <div className='flex justify-center items-center w-14 h-14 bg-base-300 rounded-full'>
                    <img src={icon} alt={name} className='w-9 h-9' />
                </div>

                <h2 className="text-2xl font-semibold">{name}</h2>

                <p>{description}</p>
                <p><span className='text-2xl font-semibold'>${price}</span>/{period}</p>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        features.map((feature,idx) => {
                            return (
                                <li key={idx}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={() => handleCartsProduct(product)} className="btn bg-blue-500 text-white btn-block rounded-full">{isAdded ? 'Added to Carts' : 'Buy Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default Product;