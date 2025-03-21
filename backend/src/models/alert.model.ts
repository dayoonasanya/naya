import mongoose from 'mongoose';

// Define a schema for an alert
const alertSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'], // Must be 'Point'
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  createdAt: { type: Date, default: Date.now }
});

// Create a 2dsphere index for location queries (if you need geo queries)
alertSchema.index({ location: '2dsphere' });

// Create the Alert model from the schema
const Alert = mongoose.model('Alert', alertSchema);

export default Alert;
