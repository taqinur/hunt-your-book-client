import React from 'react';

const Reviews = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl text-center text-primary' >Our User Reviews</h2> <hr />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-4'>
                <div className="card w-5/6 mx-auto bg-primary shadow-xl">
                    <div className="card-body text-base-100">
                        <h4 className='text-accent'>Sharon Almeida</h4>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                        </div>
                        <h2 className="card-title text-yellow-400">One Happy Customer!</h2>
                        <p>I have been very pleased with all the books I've received from Hunt-Your-Book. They are like new. Also, they were prompt.</p>
                    </div>
                </div>
                <div className="card w-5/6 mx-auto bg-primary shadow-xl">
                    <div className="card-body text-base-100">
                        <h4 className='text-accent'>Cheryl Van Daele</h4>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                        </div>
                        <h2 className="card-title text-yellow-400">Good Prices & Quick Delivery</h2>
                        <p>What can I ask for more! They know how to keep customer satisfied. Will buy again. Keep it UP!</p>
                    </div>
                </div>
                <div className="card w-5/6 mx-auto bg-primary shadow-xl">
                    <div className="card-body text-base-100">
                        <h4 className='text-accent'>Randy</h4>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                        <h2 className="card-title text-yellow-400">Great Selection of Books</h2>
                        <p>I like the large selection of books available. Service is generally great. The only complaint I would have is sometimes a book is marked as paperback but is a mass market paperback.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;