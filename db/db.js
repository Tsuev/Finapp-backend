import mongoose from 'mongoose';



async function main() {
  await mongoose.connect('mongodb+srv://FinApp:12345@cluster0.n57tosl.mongodb.net/FinApp?retryWrites=true&w=majority').catch(err => console.log(err));
    console.log('db connect');
};

export default main;