import mongoose, { Schema } from 'mongoose';

// Define movie schema
var itemSchema = new Schema({
  name: String,
  _found: Date,
  category: String,
  desc: String
});

// Export Mongoose model
export default mongoose.model('item', itemSchema);
