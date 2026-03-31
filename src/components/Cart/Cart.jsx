import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    // console.log(carts)
    const totalPrice = carts.reduce((sum,item) => (item.price+sum) , (0));
    const handleCartsItem = (deleteItem) => {
        const filteredCarts = carts.filter(item => item.id !== deleteItem.id);
        setCarts(filteredCarts);
        toast.warning("Item deleted from carts!");
    }
    return (
        <>
        {
            carts.length === 0 ?
                <div className='mt-10'>
                    <h2 className='text-2xl font-semibold'>Your Carts</h2>
                    <p className='text-center my-16'>Your carts is empty</p>
                </div>
                :
                <div className='space-y-5 my-10'>
                    <h2 className='text-2xl font-semibold'>Your Carts</h2>
                    <div>
                        {
                            carts.map(item => {
                                const { name, price, icon } = item;
                                return (
                                    <div className='flex justify-between items-center p-5 bg-base-200 rounded-2xl mb-2.5'>
                                        <div className='flex items-center gap-4'>
                                            <div className='hidden sm:block'>
                                                <div className='flex justify-center items-center w-12 h-12 bg-base-300 rounded-full'>
                                                    <img src={icon} alt={name} className='w-8 h-8' />
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-base sm:text-xl font-semibold">{name}</h2>
                                                <p>${price}</p>
                                            </div>
                                        </div>
                                        <div onClick={() => handleCartsItem(item)} className='text-red-500 sm:font-medium cursor-pointer'>
                                            Remove
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-between items-center p-2 bg-base-200 rounded-2xl'>
                        <p>Total:</p>
                        <h3 className='text-xl font-semibold sm:font-bold'>${totalPrice}</h3>
                    </div>
                    <button onClick={() => {setCarts([]); toast.success('Payment successfull!')}} className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Proceed To Checkout</button>
                </div>
        }
        </>
    );
};

export default Cart;