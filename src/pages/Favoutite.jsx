/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react';
import { getFavourite, removeFavourite } from '../Utility';
import PhoneCard from '../components/PhoneCard';
import EmptyData from './EmptyData';

const Favoutite = () => {
      const [displayPhones, setDisplayPhones] = useState([]);

      useEffect(()=>{
        const savedPhones = getFavourite();
        setDisplayPhones(savedPhones);
      },[])
    
      const handleDelete = id =>{
        removeFavourite(id);
        setDisplayPhones(getFavourite());
      }
      if(displayPhones.length <1) return <EmptyData></EmptyData>
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {displayPhones.map((phone) => (
          <PhoneCard deletable={true} key={phone.id} phones={phone} handleDelete={handleDelete}></PhoneCard>
        ))}
      </div>
        </div>
    );
};

export default Favoutite;