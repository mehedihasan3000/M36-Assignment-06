import React from 'react';
import Product from './Product';

const Products = ({products, carts, setCarts}) => {
    // console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10'>
            {
                products.map(product => <Product key={product.id} product={product} carts={carts} setCarts={setCarts} />)
            }
        </div>
    );
};

export default Products;