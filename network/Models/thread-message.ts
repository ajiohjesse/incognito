import mongoose, { Schema } from 'mongoose';

const ThreadMessageSchema = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    reciever: {
      type: String,
      required: true,
    },
    threadId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ThreadMessage =
  mongoose.models.ThreadMessage ||
  mongoose.model('ThreadMessage', ThreadMessageSchema);

export default ThreadMessage;
