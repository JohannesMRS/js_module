import mongoose from "mongoose"

const pesananSchema = new mongoose.Schema({
    _id: {type: Number, required: true,},
    order_id: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        name: {type:String, required: true},
        phone: {type:String, required: true},
        address: {type:String, required: true},
    },
    restaurant: {type: String, required: true,},
    items: {
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        price: {type: Number, required: true},
    },
    total_price: {type: Number, required:true},
    payment_method: {type:String, required: true},
    status: {type: String, required: true},
    rating: {type: Number, required:false},
    order_time: {type: Date, required: true},
    delivery: {type:Boolean, required: true, default: true}
},{
    timestamps:true
}
);

export default mongoose.model('Pesanan', pesananSchema, 'pesanans');