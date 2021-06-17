import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    FullName : String,
    EmailAddress: String,
    ContactNumber: String
},
{
    collection: "contacts"
})

const Model = mongoose.Model("Contact", ContactSchema);
export default Model;