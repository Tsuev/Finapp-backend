import mongoose from 'mongoose';


const { Schema } = mongoose;

const paymentSchema = new Schema({
  sum: Number,
  userId:  [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


const Payment = mongoose.model('Payment', paymentSchema);


export default Payment;

