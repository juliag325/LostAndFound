import mongoose, { Schema } from 'mongoose';

// Define movie schema
var locationSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  permittedIDs: Array
});

// Export Mongoose model
export default mongoose.model('location', locationSchema);
