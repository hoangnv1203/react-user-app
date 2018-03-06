import mongoose from 'mongoose'

const schema = mongoose.Schema({
  desc: {
    type: String,
    required: true
  },
  tag: {
    type: Object
  }
})

export default mongoose.model('Produce', schema)
