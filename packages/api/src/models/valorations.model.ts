import mongoose, { Document, Schema } from 'mongoose';

export interface iValorations extends Document {
  textValoration: String;
  stars: Number;
  date: Date;
}

const schema = new Schema(
  {
    textValoration: { type: String, require: true },
    stars: { type: String, require: true },
    date: { type: Date, require: true, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

export const Valorations = mongoose.model<iValorations>('Valorations', schema);
