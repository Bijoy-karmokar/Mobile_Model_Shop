export const getFavourite =()=>{
   const favourite = localStorage.getItem("favourite");
   if(favourite) return JSON.parse(favourite);
    return []
}
export const addFavourite = phones =>{
    // console.log(phones);
    const favourite = getFavourite();
    const isExist = favourite.find(phn=>phn.id === phones.id);
    if(isExist) return console.log("Phone already exist");
    
    // console.log(favourite);
    favourite.push(phones);
    localStorage.setItem("favourite",JSON.stringify(favourite))
    
}

export const removeFavourite = id =>{
    const favourite = getFavourite();
    const remainingFav = favourite.filter(phone=> phone.id !== id);
    localStorage.setItem("favourite",JSON.stringify(remainingFav));

}