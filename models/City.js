import { Schema, model } from "mongoose";


const collection = "cities"

const citySchema = new Schema({
  name: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  country: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  currency: { type: String, required: true, trim: true },
  language: { type: String, required: true, trim: true },
  population: { type: Number, required: true },
  phoneCode: { type: Number, required: true },
})

const City = model(collection, citySchema)

export default City


  

  