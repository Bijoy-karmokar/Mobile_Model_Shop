import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

const EmptyData = () => {
    return (
        <div className='text-center space-y-5'>
            <h2 className='text-6xl font-bold'>No Data Found!</h2>
            <p className='text-lg text-gray-400'>Browse, Search Phones. Add to Cart, Favorites.</p>
            <Link to="/"><Button label={"Bowse Phones"}></Button></Link>
        </div>
    );
};

export default EmptyData;