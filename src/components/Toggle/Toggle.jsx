import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Toggle = ({productsPromise, carts, setCarts}) => {
    const [toggle, setToggle] = useState('product');
    // const [carts, setCarts] = useState([]);
    const products = use(productsPromise);
    // console.log(products);
    return (
        <>
            <div className='container mx-auto text-center mt-20 space-y-3.5'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className=''>Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
            </div>
            <div className='flex justify-center items-center gap-3 mt-5'>
                <button onClick={() => setToggle('product')} className={`btn px-7 rounded-full ${toggle === 'product' && 'bg-blue-500 text-white'}`}>Products</button>

                <button onClick={() => setToggle('cart')} className={`btn px-7 rounded-full ${toggle === 'cart' && 'bg-blue-500 text-white'}`}>Cart({carts.length})</button>
            </div>
            <div className='container mx-auto'>
                {
                    toggle === 'product' ?
                        <Products products={products} carts={carts} setCarts={setCarts} />
                        :
                        <Cart carts={carts} setCarts={setCarts} />
                }
            </div>
        </>
    );
};

export default Toggle;