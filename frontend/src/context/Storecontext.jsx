import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null) //new context to use throughout application

const StoreContextProvider = (props) =>{

  const [cartItems,setCartItems] = useState({});

  const url = 'https://pumatobackend.onrender.com';
  const [token,setToken] = useState("");
  const [food_list,setFoodlist]  = useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const token = localStorage.getItem("token");
    if (token) {
        try {
            await axios.post(url + "/api/cart/add", { itemId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Failed to add item to cart. Please check your login status.");
        }
    } else {
        alert("You must be logged in to add items to the cart.");
    }
};

 
  
const removeFromCart = async (itemId) => {
  try {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

      const token = localStorage.getItem("token"); // Ensure token is fetched from localStorage or state
      if (!token) {
          throw new Error("No token found. User is not authenticated.");
      }

      await axios.post(url + "/api/cart/remove", { itemId }, {
          headers: {
              Authorization: `Bearer ${token}` // Send token as Bearer token in Authorization header
          }
      });
  } catch (error) {
      console.error("Error removing item from cart:", error.message);
      // Optionally handle the error, e.g., revert the cart change or show a message to the user
  }
};


  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for (const item in cartItems){
      if(cartItems[item]>0){
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmount += iteminfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
    setFoodlist(response.data.data)
   
  }

  const loadCartData = async (token) => {
    try {
        const response = await axios.post(url + "/api/cart/get", {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
        setCartItems(response.data.cartData);
    } catch (error) {
        console.error("Error loading cart data:", error.response ? error.response.data : error.message);
        
    }
};

 
  //refreshing will not cause logout
  useEffect(() => {
    async function loadData() {
        try {
            await fetchFoodList();
            const token = localStorage.getItem("token");
            if (token) {
                setToken(token);
                await loadCartData(token);
            }
        } catch (error) {
            console.error("Error loading data:", error);
            // Optionally handle the error, e.g., set error state or show a message
        }
    }
    loadData();
}, []);



    const contextValue = {
          food_list,
          cartItems,
          setCartItems,
          addToCart,
          removeFromCart,
          getTotalCartAmount,
          url,
          token,
          setToken,
          fetchFoodList,
          loadCartData
         
    }
    return(
      //provider component will wrap your application and provide the context value to all children
       < StoreContext.Provider value={contextValue}>
          {props.children}
       </StoreContext.Provider>
    )
}

export default StoreContextProvider;
