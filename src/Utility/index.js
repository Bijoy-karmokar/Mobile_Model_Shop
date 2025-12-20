import toast from "react-hot-toast";

export const getFavourite =()=>{
   const favourite = localStorage.getItem("favourite");
   if(favourite) return JSON.parse(favourite);
    return []
}
export const addFavourite = phones =>{
    // console.log(phones);
    const favourite = getFavourite();
    const isExist = favourite.find(phn=>phn.id === phones.id);
    if(isExist) return toast.error("Phone already exist");
    
    // console.log(favourite);
    favourite.push(phones);
    toast.success("Favourite added successfully.");
    localStorage.setItem("favourite",JSON.stringify(favourite))
    
}

export const removeFavourite = id =>{
    const favourite = getFavourite();
    const remainingFav = favourite.filter(phone=> phone.id !== id);
    toast.success("Favourite items delete successfully")
    localStorage.setItem("favourite",JSON.stringify(remainingFav));

}

export const getCart =()=>{
   const cart = localStorage.getItem("cart");
   if(cart) return JSON.parse(cart);
    return []
}
export const addCart = carts =>{
    // console.log(phones);
    const cart = getCart();
    const isExist = cart.find(cat=>cat.id === carts.id);
    if(isExist) return toast.error("Phone already exist");
    
    // console.log(favourite);
    cart.push(carts);
    toast.success("Cart added successfully.")
    localStorage.setItem("cart",JSON.stringify(cart))
    
}

export const removeCart = id =>{
    const cart = getCart();
    const remainingCart = cart.filter(phone=> phone.id !== id);
    localStorage.setItem("cart",JSON.stringify(remainingCart));

}