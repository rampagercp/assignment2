import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for the Mongoose Schema

const ClothingSchema = new Schema
({
    Name: String,
    Brand: String,
    Category: String,
    Colour: String,
    Size: String,
    Price: Number
},
{
    collection: "clothing"
});

const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;