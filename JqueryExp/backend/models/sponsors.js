import mongoose from "mongoose";

const sponsorSchema = mongoose.Schema(
    {
        organisation_name: {
            type: String,
            required: true,
        },
        organisation_type: {
            type: String,
            required: true,
        },
        industry: {
            type: String,
            required: true,
        },
        budget: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

export const Sponsor = mongoose.model('Sponsor', sponsorSchema);