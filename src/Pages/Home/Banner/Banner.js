import React from 'react';

const Banner = () => {
    return (
        <div className="card card-compact mx-auto mt-12 w-4/6 shadow-xl image-full">
            <figure><img src="https://img.freepik.com/free-photo/open-holy-bible-candle-old-oak-wooden-table-beautiful-gold-background-religion-concept_1150-10120.jpg?w=826&t=st=1669286293~exp=1669286893~hmac=d2be34291328e4cdb93fc3cfce8700023dc5f987aabc83071bcb0cf4e09f194f" alt="Books" /></figure>
            <div className="card-body m-auto">
                <h2 className="card-title text-yellow-400 text-6xl">Buy and Sell!</h2>
                <p className='text-2xl text-white-600'>Read MORE! Spend LESS! <br /> Find your treasured Books at Affordable Price</p>
                <div className="">
                    <button className="btn btn-secondary mt-10">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;