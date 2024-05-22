import express from "express";
import mongoose from "mongoose";

const connversationSchema = new mongoose.Schema({
    participants:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.Object,
            ref: "Message",
            default: [],
        }
    ]
},
    {timestamps: true}
);

const Conversation = mongoose.model("Conversation", connversationSchema);

export default Conversation;