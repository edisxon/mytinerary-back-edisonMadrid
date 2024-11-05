import { Schema, model } from "mongoose";

const collection = "itineraries"

const itinerarySchema = new Schema({
  name: { type: String, required: true },
  userPhoto: { type: String }, // URL de la foto de la persona que lo publicó
  userName: { type: String }, // Nombre de la persona que lo publicó
  price: { type: Number, min: 1, max: 5, required: true }, // Valor de 1 a 5
  duration: { type: Number, required: true }, 
  likes: { type: Number, default: 0 }, 
  hashtags: [{ type: String }], 
  cityId: { type: Schema.Types.ObjectId, ref: 'cities', required: true }, 
  
},{
  timestamps: true
})

const Itinerary = model(collection, itinerarySchema)

export default Itinerary
