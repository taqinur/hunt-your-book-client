import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiCheckCircle } from "react-icons/hi";import BookingModal from './BookingModal/BookingModal';
;

const ProductCard = ({ product, refetch }) => {
    const { _id, sellerName, productName, productImg, condition, resalePrice, originalPrice, yearsUsed, location, contactNumber, status, sellerVerification } = product;

    const [bookingProduct, setBookingProduct] = useState(null);
 

    return (
        <div className="max-w-sm mt-4 mx-auto">
            
                <div className="card card-compact w-96 bg-base-100 shadow-xl h-6/6" >
                    <figure><img src={productImg} alt="" style={{ height: '200px' }} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-emerald-700 ">{productName}</h2>
                        <p>Price: BDT {resalePrice} <br />
                            Original Price: BDT {originalPrice} <br />
                            Used for {yearsUsed} years in {condition} Condition</p>
                        <h4 className='text-lg'>Seller's Info:</h4>
                        <p className='flex flex-row'>Name: {sellerName}  {sellerVerification && <HiCheckCircle className='my-auto'></HiCheckCircle>} </p>
                        <p>Location: {location} <br />
                            Contact Number: {contactNumber}</p>
                        <div className="card-actions justify-center">
                        {status === 'available' ? <button onClick={() => setBookingProduct} htmlFor="booking-modal" className="btn btn-primary">Book Now</button> : <p disabled className="btn btn-primary">Booked</p>}
                        </div>
                    </div>
                </div>
            
            {
                bookingProduct &&
                <BookingModal
                    productName= {productName}
                    price={resalePrice}
                    refetch={refetch}
                    _id = {_id}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductCard;