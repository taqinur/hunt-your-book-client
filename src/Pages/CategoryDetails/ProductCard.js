import React from 'react';
import { HiCheckCircle } from "react-icons/hi";

const ProductCard = ({ product }) => {
    const { sellerName, productName, productImg, condition, resalePrice, originalPrice, yearsUsed, location, contactNumber, status, sellerVerification } = product;
    return (
        <div className="max-w-sm mt-4 mx-auto">
            {status === 'available' &&
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
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductCard;