import { verify } from "crypto";
import mongoose from "mongoose";
import { type } from "os";

const rsSchema = new mongoose.Schema({
    jatinangor:{
        type: Array,
        required: [true, "Please provide a jatinangor array"],
        unique : true,
    },
    ganesha:{
        type: Array,
        required: [true, "Please provide a ganesha array"],
        unique : true,
    },
    cirebon:{
        type: Array,
        required: [true, "Please provide a cirebon array"],
        unique : true,
    },
});

const Data_RS = mongoose.models.rs || mongoose.model ("rs", rsSchema, 'rs');

export default Data_RS;