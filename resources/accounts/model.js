
/**
 * dependencies
 */

import update from 'mongoose-model-update'
import mongoose, { Schema } from 'mongoose'

/**
 * schema
 */

const Account = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  tags: [String]
})

Account.plugin(update, ['tags'])

/**
 * static functions
 */

Account.statics.create = async function (obj) {
  const account = new this(obj)
  await account.save()
  return account
}

Account.statics.upsert = async function ({ email }) {
  const exists = await this.findOne({ email })
  if (exists) return exists.update(arguments[0])
  return this.create(arguments[0])
}

/**
 * expose
 */

export default mongoose.model('account', Account)
