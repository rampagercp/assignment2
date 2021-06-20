import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for Mongoose Schema 

const ClothingSchema = new Schema(
    {
        name: String,
        number: Number,
        email: String

    },
    {
        collection: "clothing"
    }
);

const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;