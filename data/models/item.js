import mongoose, { Schema } from 'mongoose';

// Define movie schema
var itemSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  desc: String
});

// Export Mongoose model
export default mongoose.model('item', itemSchema);
