
/**
 * module dependencies
 */

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.on('connected', () =>
  console.log('mongo connection open')
)

mongoose.connection.on('error', err =>
  console.error(`MongoDB connection error: ${err}`)
)

mongoose.connection.on('disconnected', () =>
  console.error('mongo connection disconnected')
)

// ^C / kill -SIGINT
process.on('SIGINT', () =>
  mongoose.connection.close(() =>
    process.exit(
      0,
      console.log('mongo connection disconnected through app termination')
    )
  )
)

export default mongoose.connection
