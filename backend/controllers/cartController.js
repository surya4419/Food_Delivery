import userModel from "../models/usermodel.js"

//add items to user cart
const addToCart = async (req,res) => {
  try{
     let userData = await userModel.findById({_id:req.body.userId});
     let cartData = await userData.cartData;

     if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1;
     }
     else{
        cartData[req.body.itemId] +=1;
     }
     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
     res.json({success:true,message:"Added To Cart"});
    }catch(error){
         console.log(error);
         res.json({success:false,message:"Error"})
    }


}


//remove items from user cart
const removeFromCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed From Cart"})
    } catch (error) {   
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}
 
// fetch user cart data
const getCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        // Find user by ID
        const userData = await userModel.findById(userId);

        // Check if user data was found
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Access cart data
        const cartData = userData.cartData;
        res.json({ success: true, cartData });
        
    } catch (error) {
        console.error("Error in getCart:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


export {addToCart,removeFromCart,getCart}