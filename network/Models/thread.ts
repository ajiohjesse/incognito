import mongoose, { Schema } from 'mongoose';

const ThreadSchema = new Schema(
  {
    participants: {
      type: Array,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const Thread = mongoose.models.Thread || mongoose.model('Thread', ThreadSchema);

export default Thread;
