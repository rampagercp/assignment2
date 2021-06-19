import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for Mongoose Schema 

const ContactSchema = new Schema(
    {
        FullName: String,
        EmailAddress: String,
        ContactNumber: String,
    },
    {
        collection: "contacts"
    }
);

const Model = mongoose.model("Contact", ContactSchema);
export default Model;