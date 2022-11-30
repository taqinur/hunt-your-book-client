import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;