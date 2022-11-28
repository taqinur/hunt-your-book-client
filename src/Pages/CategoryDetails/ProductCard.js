import React from 'react';

const ProductCard = ({ product }) => {
    const { sellerName, productName, productImg, condition, resalePrice, originalPrice, yearsUsed, location, contactNumber, status } = product;
    return (
        <div className="max-w-sm mt-4 mx-auto">
            { status ==='available' &&           
                <div className="card card-compact w-96 bg-base-100 shadow-xl h-6/6" >
                    <figure><img src={productImg} alt="" style={{height: '200px'}} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>
                        <p>Price: BDT {resalePrice} <br />
                        Original Price: BDT {originalPrice} <br />
                        Used for {yearsUsed} years in {condition} Condition</p>
                        <h4 className='text-xl'>Seller's Info:</h4>
                        <p>Name: {sellerName} <br />
                        Location: {location} <br />
                        Contact Number: {contactNumber}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
}
        </div>
    );
};

export default ProductCard;