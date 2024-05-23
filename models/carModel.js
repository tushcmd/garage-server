import mongoose, { Schema } from 'mongoose';

const carSchema = mongoose.Schema(
    {
        ownerName: {
            type: String,
            required: true,
        },
        make: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        carYear: {
            type: Number,
            required: true,
        },
        issue: {
            type: String,
            required: true,
        },
        repairPrice: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Car = mongoose.model('Car', carSchema);
