const mongoose = require('mongoose');
const validator = require('validator');

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = new mongoose.model('user',{
    name:{
        type:"string",
        required: true,
        trim: true,
    },
    age:{
        type:'Number',
    },
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    }
    }
})
//creating new user 
// let user_1 = new User({
//     name:'Ada lovelace',
//     age:46,
//     email:'adalowlace001@gmail.com'
// })
// user_1.save()
// .then((user)=>{
//     console.log(user)
// })
// .catch((err)=>{
//     console.error(err)
// })


//fetching record 
User.find({
    email:'adalowlace001@gmail.com'
})
.then((user)=>{
    console.log(user)
})
.catch((err)=>{
    console.error(err)
})


//updatine record 
User.findOneAndUpdate(
  {
    email: 'adalowlace001@gmail.com' // search query
  },
  {
    email: 'theoutlander@live.com' // field:values to update
  },
  {
    new: true, // return updated doc
    runValidators: true // validate before update
  }
)
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.error(err);
  });

//delete record 





//mongoose helpers 
 const student = new mongoose.Schema('student',{
    firstName:{
        type: 'string',
        required: true
    },
    lastName:{
        type: 'string',
        required: true
    }
 });
 // Define a virtual property for the full name
student.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});