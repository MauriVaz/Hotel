import mongoose, { Document, Schema } from 'mongoose';

export interface iValorations extends Document {
  textValoration: String;
  stars: Number;
}

const schema = new Schema({
  textValoration: { type: String, require: true },
  stars: { type: String, require: true },
});

export const Valorations = mongoose.model<iValorations>('Valorations', schema);
