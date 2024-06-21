import foodModel from "../models/foodmodel.js";
import fs from 'fs'  //file system



//add food item

export const addFood = async (req,res)=>{

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try {
        await food.save();
        res.json({success:true,message:"Foof=d added"})
    } catch (error) {
        res.json({success,message:"Error"})
        
    }

}

//export default {addFood};