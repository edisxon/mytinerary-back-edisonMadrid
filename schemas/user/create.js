import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    photo: joi.string(),
    phone: joi.number(),
    password: joi.string().required(),
    online: joi.boolean()
})

export default schema