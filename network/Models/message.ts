import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema(
  {
    reciever: {
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

const Message =
  mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default Message;
