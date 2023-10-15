const mongoose = require('mongoose')

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to the parent category model
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Subcategory", subcategorySchema);