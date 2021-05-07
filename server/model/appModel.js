import mongoose from 'mongoose';

const appSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true });


export default mongoose.model('appData', appSchema);