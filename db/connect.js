import mongoose from 'mongoose'

const connectDB = (url) => {
  return mongoose.connect(url ,{
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  })
  .then( () =>  {
    console.log('connection successful');
})
.catch( (err) => {
    console.log(err);
    console.log('connection error')

});
}
export default connectDB
