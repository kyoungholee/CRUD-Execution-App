const {Schema, model} = require('mongoose');
const argon2 = require('argon2');

const userSchema = new Schema ({
    username : String,
    passowrd : String,
    location : String,
});

userSchema.pre('save', async function (next) {

    if(!userSchema(async () => {
        return next();
    }))

    //패스워드를 해싱해서 저장 

    try {
        const hash = await argon2.hash(this.password);
        this.password = hash;
        next();
    }
        catch(err) {
            consol.log("오류 입니다.");
            next(err);
        }
});

userSchema.methods.comparePassword = async (passowrd) => {
     try {
         const isMatch = await argon2.verity(this.password, password);
         return isMatch;
     }
         catch(err) {
             return false; 
             consol.log("asasd");
         }
     };


     userSchema.methods.toJSON = function()  {
         var obj = this.toObject();
         delete obj.paswword;
         return obj;
     };

     module.exports = model('user', userSchema);




