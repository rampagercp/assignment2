import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema; //alias for Mongoose Schema 
import passportLocalMongoose from 'passport-local-mongoose'


const UserSchema = new Schema(
    {
        username: String,
        emailAddress: String,
        displayName: String,
        created:
        {
            type: Date,
            default: Date.now()
        },
        updated:
        {
            type: Date,
            default: Date.now()
        }
    },
    {
        collection: "users"
    }
);

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("Contact", UserSchema as PassportLocalSchema);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        id: String,
        username: String,
        emailAddress: String,
        displayName: String,
    }
}

export default Model;